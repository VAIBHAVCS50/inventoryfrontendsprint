import { Component, OnInit } from '@angular/core';
import { ManageRolesService } from '../manage-roles.service';
import { UserdetailsService } from '../fetchuser/userdetails.service';

interface Employee {
  userID: string;
  fname: string;
  lname: string;
  email: string;
  role: string;
  newRole?: string; // Add newRole property
}

@Component({
  selector: 'app-manage-roles',
  templateUrl: './manage-roles.component.html',
  styleUrls: ['./manage-roles.component.scss']
})
export class ManageRolesComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  roles: any[] = [];
  searchTerm: string = '';

  constructor(private asd:UserdetailsService,private roleservice: ManageRolesService) { }

  ngOnInit(): void {
    this.fetchRoles();
    this.fetchEmployees();
  }
  profile!:any;
  fetchEmployees() {

    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      this.profile = JSON.parse(storedProfile);
    }
  this.asd.getallEmployees(this.profile.id)
    .subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
        this.filterEmployees();
      },
     
    );
  }

  fetchRoles() {
    this.roleservice.getRoles().subscribe((data: string[]) => {
      this.roles = data;
    });
  }

  filterEmployees() {
    const term = this.searchTerm.toLowerCase();
    if (term) {
      // Fetch employees only when there is a search term
      this.filteredEmployees = this.employees.filter(employee =>
        (`${employee.fname} ${employee.lname}`).toLowerCase().includes(term)
      );
    } else {
      this.filteredEmployees = [];
    }
  }

  updateRole(employee: any) {
    if (employee.newRole) {
      this.roleservice.updateEmployeeRole({ id: employee.userID, role: employee.newRole }).subscribe(() => {
        console.log(`Role for ${employee.fname} updated to ${employee.newRole}`);
        employee.role = employee.newRole; // Update the current role
        employee.newRole = undefined; // Clear the new role selection
      });
    }
  }
}
