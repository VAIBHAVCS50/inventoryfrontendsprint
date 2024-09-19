import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestequipmentService } from '../requestequipment.service';
import { FilterdropdownService } from '../filterdropdown.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap'; 
import { AlertmessageService } from '../alertmessage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AddinventoryComponent implements OnInit {
  @ViewChild('customBrandModal') customBrandModal: any;
  @ViewChild('customTypeModal') customTypeModal: any;
  @ViewChild('excelDataModal') excelDataModal!: ElementRef;
  uploadChoice: string | null = null;
  excelData: any[] = [];
  file!: File;
  showTooltip: boolean = false;
  brands: string[] = [];
  types: string[] = [];
  inventoryForm!: FormGroup;

  constructor(
    private alertService: AlertmessageService,
    public apiservice: FilterdropdownService,
    private modalService: NgbModal,
    private http: HttpClient,
    private mser: RequestequipmentService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.fetchBrands();
    this.fetchTypes();
  }

  formFields = [
    { id: 'specId', label: 'Item code', icon: 'fas fa-id-badge', controlName: 'specId', type: 'input', error: 'Specification ID is required.', placeholder: '', options: [], changeEvent: null },
    { id: 'brand', label: 'Brand', icon: 'fas fa-barcode', controlName: 'brand', type: 'select', error: 'Brand is required.', placeholder: 'Select your brand', options: this.brands, changeEvent: this.onBrandChange.bind(this) },
    { id: 'type', label: 'Type', icon: 'fas fa-tags', controlName: 'type', type: 'select', error: 'Type is required.', placeholder: 'Select your type', options: this.types, changeEvent: this.onTypeChange.bind(this) },
    { id: 'description', label: 'Description', icon: 'fas fa-shapes', controlName: 'description', type: 'textarea', error: '', placeholder: '', options: [], changeEvent: null },
    { id: 'location', label: 'Location', icon: 'fas fa-align-left', controlName: 'location', type: 'textarea', error: 'Location is required.', placeholder: '', options: [], changeEvent: null },
    { id: 'equipmentId', label: 'Serial number', icon: 'fas fa-map-marker-alt', controlName: 'equipmentId', type: 'input', error: 'Serial number is required.', placeholder: '', options: [], changeEvent: null },
    { id: 'equipmentStatus', label: 'Equipment status', icon: 'fas fa-info-circle', controlName: 'equipmentStatus', type: 'input', error: '', placeholder: '', options: [], changeEvent: null },
    { id: 'availabilityStatus', label: 'Availability status', icon: 'fas fa-clock', controlName: 'availabilityStatus', type: 'input', error: '', placeholder: '', options: [], changeEvent: null },
    { id: 'Adoffice', label: 'Ad office', icon: 'fas fa-clock', controlName: 'Adoffice', type: 'input', error: '', placeholder: '', options: [], changeEvent: null },
   
  ];

  initForm() {
    this.inventoryForm = this.formBuilder.group({
      specId: ['', Validators.required],
      equipmentId: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
      location: ['', Validators.required],
      equipmentStatus: [''],
      availabilityStatus: [''],
      Adoffice: ['']
    });
  }

  fetchTypes() {
    this.apiservice.getAllTypes(this.inventoryForm.get('brand')?.value).subscribe((types: string[]) => {
      this.types = types;
    });
  }

  fetchBrands() {
    this.apiservice.getAllBrands(this.inventoryForm.get('type')?.value).subscribe((brands: string[]) => {
      this.brands = brands;
    });
  }

  onBrandChange(event: any) {
    const selectedBrand = event.target.value;
    if (selectedBrand === 'Custom') {
      this.openCustomBrandModal();
    }
  }

  onTypeChange(event: any) {
    const selectedType = event.target.value;
    if (selectedType === 'Custom') {
      this.openCustomTypeModal();
    }
  }

  openCustomTypeModal() {
    this.modalService.open(this.customTypeModal);
  }

  addCustomType(customType: string) {
    if (customType) {
      this.types.push(customType);
      this.inventoryForm.get('type')?.setValue(customType);
      this.modalService.dismissAll();
    }
  }

  openCustomBrandModal() {
    this.modalService.open(this.customBrandModal);
  }

  addCustomBrand(customBrand: string) {
    if (customBrand) {
      this.brands.push(customBrand);
      this.inventoryForm.get('brand')?.setValue(customBrand);
      this.modalService.dismissAll();
    }
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      this.readExcel();
    }
  }

  readExcel() {
    const fileReader = new FileReader();
    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      this.excelData = XLSX.utils.sheet_to_json(sheet, { raw: true });
      this.openModal(this.excelDataModal);
    };
    fileReader.readAsArrayBuffer(this.file);
  }

  processExcelData(data: any[]) {
    const inventoryItems = data.map(item => ({
      location: item['location'],
      equipmentId: item['equipmentId'],
      specId: item['specId'],
      type: item['type'],
      brand: item['brand'],
      description: item['description'],
      equipmentStatus: item['equipmentStatus'],
      availabilityStatus: item['availabilityStatus'],
      adoffice:item['Adoffice']
    }));

    this.mser.addBatchInventory(inventoryItems).subscribe(
      (response: any) => {
        console.log('Inventory batch added successfully:', response);
        this.alertService.showSnackBar('Batch items added successfully!');
        this.inventoryForm.reset();
      },
      (error: any) => {
        console.log(error.error);
        this.alertService.showSnackBar(error.error);
      }
    );
  }

  onSubmit(): void {
    if (this.inventoryForm.valid) {
      const inventoryItem = {
        location: this.inventoryForm.value.location,
        equipmentId: this.inventoryForm.value.equipmentId,
        specId: this.inventoryForm.value.specId,
        type: this.inventoryForm.value.type,
        brand: this.inventoryForm.value.brand,
        description: this.inventoryForm.value.description,
        equipmentStatus: this.inventoryForm.value.equipmentStatus,
        availabilityStatus: this.inventoryForm.value.availabilityStatus,
        adoffice:this.inventoryForm.value.adoffice
      };

      this.mser.addBatchInventory([inventoryItem]).subscribe(
        (response: any) => {
          console.log('Inventory added successfully:', response);
          this.alertService.showSnackBar('Item added successfully!');
          this.inventoryForm.reset();
        },
        (error: any) => {
          this.alertService.showSnackBar('An error occurred!');
        }
      );
    } else {
      this.markFormGroupTouched(this.inventoryForm);
    }
  }

  openModal(content: any) {
    const options: NgbModalOptions = {
      size: 'lg', // Use 'lg' for large, 'sm' for small, or a custom class
      windowClass: 'custom-modal-class'
    };
    this.modalService.open(content, options);
  }

  onConfirm() {
    this.modalService.dismissAll();
    this.processExcelData(this.excelData);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onChoiceSelection(choice: string) {
    this.uploadChoice = choice;
  }
}
