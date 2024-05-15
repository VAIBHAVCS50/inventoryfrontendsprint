
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RequestStatusDetailsDTO } from '../../models/RequestS';
import { RequestequipmentService } from '../requestequipment.service';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { RequestWithUserDetailsDTO } from '../../models/adminviewrequest';
import { sad } from '../../models/userdmodel';
import { Subscription } from 'rxjs';
import { SignalRService } from '../signal-r.service';
import { AlertmessageService } from '../alertmessage.service';
// import { SelfupdateService } from '../selfupdate.service';

@Component({
  selector: 'app-requeststatus',
  templateUrl: './requeststatus.component.html',
  styleUrls: ['./requeststatus.component.scss']
})
export class RequeststatusComponent implements OnInit  {
  
showGatepass(_t39: RequestStatusDetailsDTO) {
  this.requestService.getRequestStatus(this.profile.id).subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.error('Error fetching request status:', error);
   
    }
  );
}
modalTitle!: string;
requestInProgress :boolean=false;
private requestMadeSubscription!: Subscription;

cancelRequest() {
   // Handle request cancellation
   this.showRequestModal = false;
  
}
getStatusClass(requestStatus: string): string {
 
  switch (requestStatus) {
    case 'Approved':
      return 'table-success';
    case 'Denied':
      return 'table-danger';
    case 'Pending':
      return 'table-warning';
    default:
      return '';
  }
}

  gatepassdata:any;
confirmRequest() {
  const formattedDate = this.gatepassdata.issueDate.toISOString();
  this.requestInProgress = true;

  console.log("fdbfdg");
  
  if(this.modalTitle=='Approve Request'){
    this.gatepassdata.status='approved';
    this.requestService.createGatepass(this.gatepassdata.userId,this.gatepassdata.equipmentId,this.gatepassdata.requestId,this.gatepassdata.approverId,formattedDate,this.gatepassdata.status).subscribe({
      next: (response: any) => {
        console.log('Gatepass created successfully:', response.message);
        this.showRequestModal = false;
        this.signalRservice.requestEquipmentUpdate2(this.gatepassdata.userId);
        this.signalRservice.requestEquipmentUpdate();
        this.alertservice.showSnackBar('Request Approved!');
        // Handle success
      },
      error: (error: any) => {
        console.error('Error creating gatepass:', error);
        this.alertservice.showSnackBar('An error occurred while processing the request.');

        // Handle error
      },
      complete: () => {
        // Set the flag to indicate that the request is complete
        this.requestInProgress = false;
      }
  
    });
    
    
  }
  else{
    this.gatepassdata.status='rejected';
    this.requestService.createGatepass(this.gatepassdata.userId,this.gatepassdata.equipmentId,this.gatepassdata.requestId,this.gatepassdata.approverId,formattedDate,this.gatepassdata.status).subscribe({
      next: (response: any) => {
        console.log('Gatepass  successfully rejected:', response);
        this.showRequestModal = false;
        this.signalRservice.requestEquipmentUpdate2(this.gatepassdata.userId);
        this.signalRservice.requestEquipmentUpdate();
        this.alertservice.showSnackBar('Request Rejected!');
        // Handle success
      },
      error: (error: any) => {
        console.error('Error creating gatepass:', error);
        // Handle error
        this.showRequestModal = false;
  // this.signalRservice.requestEquipmentUpdate();
      },
      complete: () => {
        // Set the flag to indicate that the request is complete
        this.requestInProgress = false;
      }
  
    });
    
  }
  
 
}

changep(){
  this.showRequestModal = false;
}

openRequestModal(arg0: RequestWithUserDetailsDTO,asdf:string) {
  this.gatepassdata = {
    userId: arg0.userId,
    equipmentId: arg0.equipmentId,
    requestId: arg0.requestId,
    approverId: this.profile.id,
    issueDate: new Date(),
  };
  this.modalTitle=asdf;
    console.log('Opening request modal for:', arg0);
    this.selectedEquipment = arg0;
    this.showRequestModal = true;
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

  constructor(private alertservice:AlertmessageService,private requestService: RequestequipmentService, private asd: UserdetailsService,private signalRservice:SignalRService) { }
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
    if (this.role.role === "admin"||this.role.role === "manager") {
      this.fetchRequestsWithUserDetails();
      
    } else {
      this.fetchRequestStatus();
    }
    this.decidethesignalr();
  }

  fetchRequestStatus(): void {
    this.loading = true;
    this.requestService.getRequestStatus(this.profile.id).subscribe(
      (data) => {
        this.requestStatusList = data;
        console.log(this.requestStatusList);
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching request status:', error);
        this.loading = false;
      }
    );
  }

  fetchRequestsWithUserDetails(): void {
    this.loading = true;
    this.requestService.getRequestsWithUserDetailsforadmin().subscribe(
      (data) => {
        this.requestWithUserDetailsList = data;
        this.loading = false;
      },
    );
  }

  ngOnDestroy(): void {
    // Unsubscribe from the subscription to avoid memory leaks
    this.psc2Subscription.unsubscribe();
  }
}

