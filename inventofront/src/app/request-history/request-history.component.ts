import { Component, Input, OnInit, input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignalRService } from '../signal-r.service';
import { RequestStatusDetailsDTO } from '../../models/RequestS';
import { GetequipmentService } from '../getEquipmentService/getequipment.service';
import { AlertmessageService } from '../alertmessage.service';

@Component({
  selector: 'app-request-history',
  templateUrl: './request-history.component.html',
  styleUrl: './request-history.component.scss'
})
export class RequestHistoryComponent implements OnInit {


  deleteRequest(requestId: string) {
    if(confirm("Are you sure you want to delete this request?")) {
      this.equip.deleteRequest(requestId).subscribe(
        (response) => {
          // Handle successful deletion
          this.data = this.data.filter(request => request.requestId !== requestId);
          this.alertservice.showSnackBar("Request successully deleted");
        },
        (error) => {
          // Handle error
          console.log(error);
          this.alertservice.showSnackBar("An error occured");
        }
      );
    }
  }
  
constructor(private alertservice:AlertmessageService,private signalRService:SignalRService,private equip:GetequipmentService){

}
  activeOrdersSubscription?: Subscription;
  ngOnInit(): void {
      
    this.activeOrdersSubscription = this.signalRService.psc$.subscribe(() => {
     
    });
  
  }
  @Input() data!: RequestStatusDetailsDTO[];
  @Input() currentPage!: number;
  @Input() pageSize!: number;
  @Input() pages!: number[];
  @Input() powerrole!:string;

  goToPage(page: number) {
    this.currentPage = page;
  }
  
  

  
}
