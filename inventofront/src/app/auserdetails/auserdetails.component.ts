import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestequipmentService } from '../requestequipment.service';
import { RequestStatusDetailsDTO } from '../../models/RequestS';

@Component({
  selector: 'app-auserdetails',
  templateUrl: './auserdetails.component.html',
  styleUrl: './auserdetails.component.scss'
})
export class AuserdetailsComponent {
  employeeId!: string;
  buttonId!: string;
 data!:any;
requestInProgress: boolean=false;
  constructor(private route: ActivatedRoute,private apiservice: RequestequipmentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.buttonId = params['buttonId'];

      // Now you have access to both employeeId and buttonId
      if (this.buttonId === 'request-history') {
        // Handle request history button click
        this.requestInProgress=true;
        console.log("request-history",this.employeeId);
        this.apiservice.getRequestStatus(this.employeeId).subscribe(
          (data: RequestStatusDetailsDTO[]) => {
            console.log('Request Status:', data);
            this.data=data;
            this.requestInProgress=false;
            // Handle the data received from the API
          },
          (error) => {
            console.error('Error fetching issued gatepasses:', error);
            this.requestInProgress=false;
            // Handle error
          }
        );
      }

      else if (this.buttonId === 'issued-gatepass') {
        // Handle issued gatepass button click
        console.log("issued-gatepass",this.employeeId);
        this.requestInProgress=true;
        this.apiservice.getIssuedGatepasses(this.employeeId).subscribe(
          (data) => {
            console.log('Issued Gatepasses:', data);
            // Handle the data received from the API
            this.data=data;
            this.requestInProgress=false;
          },
          (error) => {
            console.error('Error fetching issued gatepasses:', error);
            this.requestInProgress=false;
            // Handle error
          }
        );
      }
    });
  }

}
