import { Component } from '@angular/core';
import { UserdetailsService } from '../fetchuser/userdetails.service';
import { Employee } from '../../models/Employee';
@Component({
  selector: 'app-ausers',
  templateUrl: './ausers.component.html',
  styleUrl: './ausers.component.scss'
})
export class AusersComponent {
requestInProgress: boolean=false;

  
viewIssuedGatepass(_t18: Employee) {
throw new Error('Method not implemented.');
}
viewRequestHistory(_t18: Employee) {
    this.employee=_t18;
}

  employees: Employee[] = [];
 employee!:Employee;
constructor(private asd:UserdetailsService){}
profile!:any;
ngOnInit(): void {
  this.fetchEmployees();
}
displayedColumns: string[] = ['name', 'email', 'designation', 'role', 'actions'];
fetchEmployees(): void {
  this.requestInProgress=true;
  const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
    }
  this.asd.getallEmployees(this.profile.id)
    .subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
        this.requestInProgress=false;
      },
     
    );
}

}
