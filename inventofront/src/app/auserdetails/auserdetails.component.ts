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
updateData() {
this.fetchdata();
}
  employeeId!: string;
  buttonId!: string;
 data!:any;
requestInProgress: boolean=false;
currentPage: number = 1;
pageSize: number = 4; // Set the number of items per page
pages: number[] = [];
from!: string;
loading:boolean=false;

  constructor(private route: ActivatedRoute,private apiservice: RequestequipmentService) { }

  ngOnInit(): void {
   this.fetchdata();
   
  }


  fetchdata(){
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      console.log(this.from);
    });

    this.route.params.subscribe(params => {
      this.employeeId = params['employeeId'];
      this.buttonId = params['buttonId'];
     console.log(this.buttonId);
      // Now you have access to both employeeId and buttonId
      console.log(this.from);
      if (this.buttonId === 'request-history') {
        // Handle request history button click
        this.loading=true;
        this.requestInProgress=true;
        console.log("request-history",this.employeeId);
        this.apiservice.getspecificuserrequestid(this.employeeId).subscribe(
          (data: RequestStatusDetailsDTO[]) => {
            console.log('Request Status:', data);
            this.data=data;
            this.requestInProgress=false;
            this.populatePages();
            this.loading=false;
            // Handle the data received from the API
          },
          (error) => {
            if (error.status === 404) {
              // Handle the case where no gatepasses were found
              this.data = [];  // Set data to an empty array
            }
            console.error('Error fetching requests:', error);
            this.requestInProgress=false;
            this.loading=false;
            // Handle error
          
          }
        );
      }

      else if (this.buttonId === 'issued-gatepass') {
        // Handle issued gatepass button click

        if(this.from==='approve-submit-equipment'){
          console.log(this.buttonId);
          this.requestInProgress=true;
          this.loading=true;
          this.apiservice.getIssuedGatepasses().subscribe(
            (data) => {
              console.log('Issued Gatepasses:', data);
              // Handle the data received from the API
              this.data=data;
              this.requestInProgress=false;
              this.loading=false;
              this.populatePages();
            },
            (error) => {
              if (error.status === 404) {
                // Handle the case where no gatepasses were found
                this.data = [];  // Set data to an empty array
              }
              console.error('Error fetching issued gatepasses:', error);
              this.requestInProgress=false;
              this.loading=false;
              // Handle error
            }
          );
        }
        else{
          console.log("issued-gatepass",this.employeeId);
          this.requestInProgress=true;
          this.loading=true;
          this.apiservice.getIssuedGatepasses(this.employeeId).subscribe(
            (data) => {
              console.log('Issued Gatepasses:', data);
              // Handle the data received from the API
              this.data=data;
              this.requestInProgress=false;
              this.loading=false;
              this.populatePages();
            },
            (error) => {
              if (error.status === 404) {
                // Handle the case where no gatepasses were found
                this.data = [];  // Set data to an empty array
              }
              console.error('Error fetching issued gatepasses:', error);
              this.requestInProgress=false;
              this.loading=false;
              console.log(error.status);
              // Handle error
            }
          );
        }
       
      }
    });
  }
//understand
  populatePages(): void {
    const pageCount = Math.ceil(this.data.length / this.pageSize);
    this.pages = Array(pageCount).fill(0).map((x, i) => i + 1);
  }
  goToPage(page: number): void {
    this.currentPage = page;
    // Add any other logic you need to handle when a page is clicked
  }

}
