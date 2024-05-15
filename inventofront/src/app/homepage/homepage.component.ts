import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {GetequipmentService  } from '../getEquipmentService/getequipment.service';
import { CategoryDetails } from '../../models/EquipmentetailsModel';
import { IsloggedinService } from '../isloggedin.service';
import { Subscription } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { FilterdropdownService } from '../filterdropdown.service';
import { RequestequipmentService } from '../requestequipment.service';
import {UserdetailsService} from '../fetchuser/userdetails.service';
import {Profilee} from '../profile/profile.component';
import { SignalRService } from '../signal-r.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertmessageService } from '../alertmessage.service';
// import { SelfupdateService } from '../selfupdate.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  requestInProgress:boolean=false;
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
modalTitle: string='Request Comformation';

increaseQuantity(equipment: CategoryDetails) {
  if (equipment.requestedQuantity < equipment.quantity) {
    equipment.requestedQuantity++;
  }



}
profile!: Profilee;
private signalRSubscription!: Subscription;
showSuccessAlert: boolean = false;
  progressWidth: string = '100%';



requestEquipment(equipment: CategoryDetails): void {
  this.requestInProgress = true; // Show loader

  if (equipment.requestedQuantity > 0) {
    // Check if requestedQuantity is greater than 0
    this.equipmentService.fetchEquipmentIds(this.profile.id, equipment.requestedQuantity, equipment.categoryId)
      .subscribe(
        (value) => {
          console.log('Fetched Equipment IDs:', value);
         
         
          this.signalRService.requestEquipmentUpdate();  // function1 invoked 
          // Handle the response or further actions here
          this.requestInProgress = false; // Hide loader once request is successful
          this.alertmessage.showSnackBar('Request Successful.');
        }
      );
  } else {
    console.warn('Please select a valid quantity.');
    this.requestInProgress = false; // Hide loader if quantity is invalid
    // Provide user feedback or handle invalid quantity case
  }
}

decreaseQuantity(equipment: CategoryDetails) {
  if (equipment.requestedQuantity > 0) {
    equipment.requestedQuantity--;
  }
}


  selectedBrands: string = '';
  selectedType: string = '';
  selectedSpecId!: string;


  brands: string[] = [];
  types: string[] = [];
  specifications: number[] = [];

  isAuthenticated = false;
  private authStatusSubscription!: Subscription;
  activeOrdersSubscription?: Subscription;
  equipments!: CategoryDetails[];
  constructor(private alertmessage:AlertmessageService,private modalService: NgbModal,private signalRService:SignalRService,private ele:UserdetailsService,private equipmentService: RequestequipmentService,private categoryDetailsService: GetequipmentService,public alfa:IsloggedinService,public sbg:MsalService,public apiservice:FilterdropdownService) {
   
   }

   showRequestModal: boolean = false;
   selectedEquipment!: CategoryDetails;

   openRequestModal(equipment: CategoryDetails) {
    console.log('Opening request modal for:', equipment);
    this.selectedEquipment = equipment;
    this.showRequestModal = true;
  }
  changep(){
    this.showRequestModal = false;
  }
  
  confirmRequest() {
    // Handle request confirmation
    this.requestEquipment(this.selectedEquipment);
    this.showRequestModal = false;
  }

  cancelRequest() {
    // Handle request cancellation
    this.showRequestModal = false;
  }
  
   ngOnInit() {

    
    this.activeOrdersSubscription = this.signalRService.psc$.subscribe(() => {
      this.showEquipments();
    });
  


    this.isAuthenticated = this.sbg.instance.getAllAccounts().length > 0;
    this.fetchFilterOptions(); 
    this.authStatusSubscription = this.alfa.getAuthenticationStatus$()
      .subscribe((isLoggedIn: boolean) => {
        this.isAuthenticated = isLoggedIn;
        console.log("====---------");
        console.log(this.isAuthenticated);
            
      });
  }
  fetchFilterOptions(): void {
    this.apiservice.getAllBrands(this.selectedType).subscribe((brands: string[]) => {
      this.brands = brands;
    });

    this.apiservice.getAllTypes(this.selectedBrands).subscribe((types: string[]) => {
      this.types = types;
    });

    this.apiservice.getAllSpecifications(this.selectedBrands,this.selectedType).subscribe((specifications: number[]) => {
      this.specifications = specifications;
    });
  }

  
  onBrandChange(): void {
    this.fetchFilterOptions(); // Update types and specifications based on selected brand
  }

  onTypeChange(): void {
    this.fetchFilterOptions(); // Update specifications based on selected type
  }


  ngOnDestroy() {
    this.authStatusSubscription.unsubscribe();
    if (this.signalRSubscription) {
      this.signalRSubscription.unsubscribe();
    }
  }

  showEquipments(): void {
    this.requestInProgress = true;
    this.ele.getuser()
    .subscribe(profile => {
     
      this.profile = profile;
      console.log(this.profile);
    });
    this.categoryDetailsService.getCategoryDetails(this.selectedBrands, this.selectedType, this.selectedSpecId)
    .subscribe((data: CategoryDetails[]) => {
      this.equipments = data.map(equipment => ({
        ...equipment,
        requestedQuantity: 0 // Initialize requestedQuantity to 0 for each equipment
      }));
      this.requestInProgress = false; // Hide loader once data is fetched
    });
  }
specIDD:any;
loadGatepasses(specId: any) {
  this.equipmentService.getGatepassesBySpecId(specId).subscribe(
    data => {
      this.gatepasses = data;
      console.log(this.gatepasses);
      this.modalService.open(this.modalContent, { centered: true });
    },
    error => {
      console.error('Error fetching gatepasses:', error);
      // Handle the error, e.g., show an error message to the user
    }
  );
}

  gatepasses!: any[];
  
  openModal(specId: any) {
    this.specIDD = specId;
    this.loadGatepasses(this.specIDD); 
    // this.modalService.open(this.modalContent, { centered: true }); // Open the modal with the template reference
  }
  

  


}
