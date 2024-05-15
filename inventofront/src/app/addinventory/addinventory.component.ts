import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestequipmentService } from '../requestequipment.service';
import { FilterdropdownService } from '../filterdropdown.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { AlertmessageService } from '../alertmessage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules

@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.scss'] // Corrected 'styleUrl' to 'styleUrls'
})
export class AddinventoryComponent implements OnInit {
  @ViewChild('customBrandModal') customBrandModal: any;
  @ViewChild('customTypeModal') customTypeModal: any;

  showTooltip: boolean = false;
  brands: string[] = [];
  types: string[] = [];
  inventoryForm!: FormGroup; // Define FormGroup for the form

  constructor(
    private alertService: AlertmessageService,
    public apiservice: FilterdropdownService,
    private modalService: NgbModal,
    private http: HttpClient,
    private mser: RequestequipmentService,
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm(); // Initialize the form
    this.fetchBrands();
    this.fetchTypes();
  }

  initForm() {
    // Initialize the form with FormBuilder
    this.inventoryForm = this.formBuilder.group({
      specId: ['', Validators.required],
      equipmentId: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
      location: ['', Validators.required]
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

  onSubmit(): void {
    if (this.inventoryForm.valid) { // Check if the form is valid
      this.mser.addInventory(
        this.inventoryForm.value.location,
        this.inventoryForm.value.equipmentId,
        this.inventoryForm.value.specId,
        this.inventoryForm.value.type,
        this.inventoryForm.value.brand,
        this.inventoryForm.value.description
      ).subscribe(
        (response: any) => {
          console.log('Inventory added successfully:', response);
          this.alertService.showSnackBar('Item added Successfully!');
          // Reset form fields after successful submission
          this.inventoryForm.reset();
        },
      );
    } else {
      // Mark all fields as touched to display error messages
      this.markFormGroupTouched(this.inventoryForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
