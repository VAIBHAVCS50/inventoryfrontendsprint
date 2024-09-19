import { Component, EventEmitter, Output } from '@angular/core';
import { FilterdropdownService } from '../filterdropdown.service';

@Component({
  selector: 'app-office-selector-component',
  templateUrl: './office-selector-component.component.html',
  styleUrl: './office-selector-component.component.scss'
})
export class OfficeSelectorComponentComponent {
  offices: string[] = [];
  selectedOffice: string = '';

  @Output() officeSelected = new EventEmitter<string>();

  constructor(private filterService: FilterdropdownService) { }

  ngOnInit(): void {
    this.fetchOffices();
  }

  fetchOffices(): void {
    this.filterService.getAllOffices().subscribe((offices: string[]) => {
      this.offices = offices;
    });
  }

  onOfficeChange(): void {
    this.officeSelected.emit(this.selectedOffice);
  }

}
