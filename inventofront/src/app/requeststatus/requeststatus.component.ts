
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { RequestStatusDetailsDTO } from '../../models/RequestS';
import { RequestequipmentService } from '../requestequipment.service';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { EquipmentDetailsDTO, RequestWithUserDetailsDTO } from '../../models/adminviewrequest';
import { sad } from '../../models/userdmodel';
import { Subscription } from 'rxjs';
import { SignalRService } from '../signal-r.service';
import { AlertmessageService } from '../alertmessage.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppRequestConfirmationModalComponent } from '../app-request-confirmation-modal/app-request-confirmation-modal.component';


// import { SelfupdateService } from '../selfupdate.service';

@Component({
  selector: 'app-requeststatus',
  templateUrl: './requeststatus.component.html',
  styleUrls: ['./requeststatus.component.scss']
})
export class RequeststatusComponent implements OnInit   {

@Input() powerrole!:string;
buttonId: any;
paginatedRequestList: any[] = [];
 
  itemsPerPage: number = 5;
  totalPages: number = 1;
  totalPagesArray: number[] = [];


currentPage: number = 1;
pageSize: number = 5; // Set the number of items per page
pages: number[] = [];


// Method to toggle panel
openPanels: { [key: number]: boolean } = {};

// Method to toggle panel
togglePanel(index: number): void {
  console.log(this.openPanels[index]);
  this.openPanels[index] = !this.openPanels[index];
  console.log(this.openPanels[index]);
}

// Check if panel is open
isPanelOpen(index: number): boolean {
  return !!this.openPanels[index];
}


generateTotalPagesArray() {
  this.totalPagesArray = Array.from({ length: this.totalPages }, (v, k) => k + 1);
}

approveAll(action: string, remarks: string) {
  this.loading = true;
  this.requestService.updateRequestStatus(this.selectedEquipment.requestId, this.profile.id, this.role.role, action, remarks)
    .subscribe(
      response => {
        console.log('Request status updated successfully', response);
        this.signalRservice.requestEquipmentUpdate2(this.profile.id);
        this.signalRservice.requestEquipmentUpdate();
        this.alertservice.showSnackBar("Successfully: " + action);
        this.loading = false;
        // Handle success scenario
      },
      error => {
        if(error.status==404){
          console.error('Error updating request status', error);
          this.paginatedRequestList=[];
        }
        else{
          this.alertservice.showSnackBar("An error occurred. Please try again later.");
          this.loading = false;
        }
       
        // Handle error scenario
       
      }
    );
}

  copiedRequestId: string | null = null;

  copyToClipboard(requestId: string): void {
    navigator.clipboard.writeText(requestId).then(() => {
      this.copiedRequestId = requestId;
      setTimeout(() => {
        this.copiedRequestId = null;
      }, 2000); // Reset after 2 seconds
    });
  }

  
// 
modalTitle!: string;
requestInProgress :boolean=false;
private requestMadeSubscription!: Subscription;

cancelRequest() {
   // Handle request cancellation
   this.showRequestModal = false;
  
}

  gatepassdata:any;
// confirmRequest() {
//   const formattedDate = this.gatepassdata.issueDate.toISOString();
//   this.requestInProgress = true;

//   console.log("fdbfdg");
  
//   if(this.modalTitle=='Approve Request'){
//     this.gatepassdata.status='approved';
//     this.requestService.createGatepass(this.gatepassdata.userId,this.gatepassdata.equipmentId,this.gatepassdata.requestId,this.gatepassdata.approverId,formattedDate,this.gatepassdata.status).subscribe({
//       next: (response: any) => {
//         console.log('Gatepass created successfully:', response.message);
//         this.showRequestModal = false;
//         this.signalRservice.requestEquipmentUpdate2(this.gatepassdata.userId);
//         this.signalRservice.requestEquipmentUpdate();
//         this.alertservice.showSnackBar('Request Approved!');
//         // Handle success
//       },
//       error: (error: any) => {
//         console.error('Error creating gatepass:', error);
//         this.alertservice.showSnackBar('An error occurred while processing the request.');

//         // Handle error
//       },
//       complete: () => {
//         // Set the flag to indicate that the request is complete
//         this.requestInProgress = false;
//       }
  
//     });
    
    
//   }
//   else{
//     this.gatepassdata.status='rejected';
//     this.requestService.createGatepass(this.gatepassdata.userId,this.gatepassdata.equipmentId,this.gatepassdata.requestId,this.gatepassdata.approverId,formattedDate,this.gatepassdata.status).subscribe({
//       next: (response: any) => {
//         console.log('Gatepass  successfully rejected:', response);
//         this.showRequestModal = false;
//         this.signalRservice.requestEquipmentUpdate2(this.gatepassdata.userId);
//         this.signalRservice.requestEquipmentUpdate();
//         this.alertservice.showSnackBar('Request Rejected!');
//         // Handle success
//       },
//       error: (error: any) => {
//         console.error('Error creating gatepass:', error);
//         // Handle error
//         this.showRequestModal = false;
//   // this.signalRservice.requestEquipmentUpdate();
//       },
//       complete: () => {
//         // Set the flag to indicate that the request is complete
//         this.requestInProgress = false;
//       }
  
//     });
    
//   }
  
 
// }

changep(){
  this.showRequestModal = false;
}

openRequestModal(cartItems: any, action: string) {
  console.log(cartItems);
  if (action == "approved") this.modalTitle = "Confirm Approval";
  else this.modalTitle = "Confirm Rejection";
  this.selectedEquipment = cartItems;
  
  const modalRef = this.modalService.open(AppRequestConfirmationModalComponent, { centered: true });
  modalRef.componentInstance.title = this.modalTitle;
  modalRef.componentInstance.requestData = cartItems;
  
  modalRef.result.then((result) => {
    if (result && result.confirmed) {
      this.approveAll(action, result.remarks);
    }
  }, (reason) => {
    this.cancelRequest();
  });
}


  loading: boolean = false;
  
  role: any = "employee";


  requestStatusList: RequestStatusDetailsDTO[] = [];
  requestWithUserDetailsList: RequestWithUserDetailsDTO[] = [];
  profile!: any;
  showRequestModal: boolean = false;


  selectedEquipment!: any;

  activeOrdersSubscription?: Subscription;
  private psc2Subscription!: Subscription;

  constructor(private modalService: NgbModal,private alertservice:AlertmessageService,private requestService: RequestequipmentService, private asd: UserdetailsService,private signalRservice:SignalRService) { }
  decidethesignalr(): void {
    console.log("takeeeeeeeeee careeeeeeeeeeee",this.role.role);
    if(this.role.role === "admin"||this.role.role === "manager"){
      this.activeOrdersSubscription = this.signalRservice.psc$.subscribe(() => {
        this.fetchData();
      });
    }
  }

  ngOnInit(): void {

   
    // this.requestMadeSubscription = this.updateservice.requestMade$.subscribe(() => {
    //   // Perform actions when a request is made
    //   this.fetchData();
    // });

    this.psc2Subscription = this.signalRservice.psc2$.subscribe((userIIdd: string) => {
      console.log('Received userId:', userIIdd);
      console.log(this.profile);
      if(this.profile.id===userIIdd){
     console.log("vaibhav take good care");
      console.log(userIIdd);
        this.fetchData();
        console.log("galat ho raha hai ye");
      }
    });
    

  

    this.asd.getuser().subscribe((data) => {
      console.log(data);
      this.profile = data;
     console.log(this.profile);
      this.asd.getUserRole(this.profile.id).subscribe(
        (role) => {
          this.role = role;
          console.log("role",role);
          this.fetchData();
        },
      
      );
    });
  }

  fetchData(): void {
   
      this.fetchRequestsWithUserDetails();
      
      this.decidethesignalr();
  }

 
  populatePages(): void {
    const pageCount = Math.ceil(this.requestWithUserDetailsList.length / this.pageSize);
    this.pages = Array(pageCount).fill(0).map((x, i) => i + 1);
    this.generateTotalPagesArray();
    this.paginateRequests();

  }

  paginateRequests() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedRequestList = this.requestWithUserDetailsList.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateRequests();
    }
  }

  fetchRequestsWithUserDetails(): void {
    this.loading = true;

    if (this.powerrole === null || this.powerrole === undefined) {
      console.warn('Powerrole is null or undefined. Handling the situation appropriately.');
      // Handle the null/undefined powerrole scenario
      this.requestService.getRequestsWithUserDetailsforadmin(this.profile.id,undefined).subscribe(
        (data) => {
          console.log("vaibhaviiiiiiiii",data);
          this.requestWithUserDetailsList = data;
          this.populatePages();
          this.loading = false;
        },
        (error) => {
          console.error('Error fetching requests with user details:', error);
          this.loading = false;
        }
      );
    } else {
      this.requestService.getRequestsWithUserDetailsforadmin(this.profile.id, this.powerrole).subscribe(
        (data) => {
          console.log("vaibhaviiiiiiiii",data);
          this.requestWithUserDetailsList = data;
          this.populatePages();
          this.loading = false;
        },
        (error) => {
          if(error.status==404){
            this.requestWithUserDetailsList=[];
          }
          console.error('Error fetching requests with user details:', error);
          this.loading = false;
        }
      );
    }
  }
  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    this.psc2Subscription.unsubscribe();
  }

  
}

