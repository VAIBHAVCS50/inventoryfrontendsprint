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
  brands: string[] = ['Custom'];
  types: string[] = ['Custom'];
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

  }
  selectedOffice: string = '';

  onOfficeSelected(office: string): void {
    this.selectedOffice = office;
    this.fetchBrands();
    this.fetchTypes();
  }


  formFields = [
    { id: 'Item code', label: 'Item code', icon: 'fas fa-id-badge', controlName: 'specId', type: 'input', error: 'Specification ID is required.', placeholder: '', options: [], changeEvent: null },
    { id: 'Brand', label: 'Brand', icon: 'fas fa-barcode', controlName: 'brand', type: 'select', error: 'Brand is required.', placeholder: 'Select your brand', options: this.brands, changeEvent: this.onBrandChange.bind(this) },
    { id: 'Type', label: 'Type', icon: 'fas fa-tags', controlName: 'type', type: 'select', error: 'Type is required.', placeholder: 'Select your type', options: this.types, changeEvent: this.onTypeChange.bind(this) },
    { id: 'Description', label: 'Description', icon: 'fas fa-shapes', controlName: 'description', type: 'textarea', error: '', placeholder: '', options: [], changeEvent: null },
    { id: 'Location', label: 'Location', icon: 'fas fa-align-left', controlName: 'location', type: 'textarea', error: 'Location is required.', placeholder: '', options: [], changeEvent: null },
    { id: 'Serial number', label: 'Serial number', icon: 'fas fa-map-marker-alt', controlName: 'equipmentId', type: 'input', error: 'Serial number is required.', placeholder: '', options: [], changeEvent: null },
    // { id: 'equipmentStatus', label: 'Equipment status', icon: 'fas fa-info-circle', controlName: 'equipmentStatus', type: 'input', error: '', placeholder: '', options: [], changeEvent: null },
    // { id: 'availabilityStatus', label: 'Availability status', icon: 'fas fa-clock', controlName: 'availabilityStatus', type: 'input', error: '', placeholder: '', options: [], changeEvent: null },
    // { id: 'Adoffice', label: 'Ad office', icon: 'fas fa-clock', controlName: 'Adoffice', type: 'input', error: '', placeholder: '', options: [], changeEvent: null },
   
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
    this.apiservice.getAllTypes(this.selectedOffice,this.inventoryForm.get('brand')?.value).subscribe((types: string[]) => {
      this.types = types;
      this.updateFormFieldOptions('type', this.types);

    });
  }

  fetchBrands() {
    this.apiservice.getAllBrands(this.selectedOffice,this.inventoryForm.get('type')?.value).subscribe((brands: string[]) => {
      this.brands = brands;
      this.updateFormFieldOptions('brand', this.brands);
    });
  }
  updateFormFieldOptions(controlName: string, options: string[]) {
    const field = this.formFields.find(f => f.controlName === controlName);
    console.log(options);
    console.log(controlName);
    if (field) {
      options.push('Custom');
      field.options = options;
    }
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
      this.types.unshift(customType);
      this.inventoryForm.get('type')?.setValue(customType);
      this.modalService.dismissAll();
    }
  }

  openCustomBrandModal() {
    this.modalService.open(this.customBrandModal);
  }

  addCustomBrand(customBrand: string) {
    if (customBrand) {
      this.brands.unshift(customBrand);
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
      console.log(this.excelData);
      this.openModal(this.excelDataModal);
    };
    fileReader.readAsArrayBuffer(this.file);
  }

  processExcelData(data: any[]) {
    console.log(data);
    console.log("asfdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
    const inventoryItems = data.map(item => ({
      location: item['Location'],
      equipmentId: item['Serial number'],
      specId: item['Item code'],
      type: item['Type'],
      brand: item['Brand'],
      description: item['Description'],
      equipmentStatus: 0,
      availabilityStatus: 0,
      adoffice:this.selectedOffice
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
        equipmentStatus: 0,
        availabilityStatus: 0,
        adoffice:this.selectedOffice
      };
      console.log(inventoryItem);
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
    console.log(content);
    console.log(options);
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
