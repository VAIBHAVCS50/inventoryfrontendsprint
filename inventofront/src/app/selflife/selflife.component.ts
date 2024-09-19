import { Component, OnInit } from '@angular/core';
import { RequestequipmentService } from '../requestequipment.service';
import { ExcelServiceService } from '../excel-service.service';

@Component({
  selector: 'app-selflife',
  templateUrl: './selflife.component.html',
  styleUrl: './selflife.component.scss'
})
export class SelflifeComponent implements OnInit {
  inventoryData: any[] = [];
  filteredData: any[] = [];
  loading: boolean = true;

  typeFilter: string = '';
  brandFilter: string = '';
  statusFilter: string = '';
  minYears: number | undefined;
  maxYears: number | undefined;

  constructor(
    private inventoryService: RequestequipmentService,
    private excelExportService: ExcelServiceService
  ) {}

  ngOnInit(): void {
    this.inventoryService.getShelfLifeAnalysis().subscribe(
      data => {
        this.inventoryData = data.map(item => ({
          ...item,
          shelfLife: this.calculateShelfLife(new Date(), new Date(item.endDate))
        }));
        this.filteredData = [...this.inventoryData];
        this.loading = false;
      },
      error => {
        console.error('Error fetching inventory data', error);
        this.loading = false;
      }
    );
  }

  calculateShelfLife(startDate: Date, endDate: Date): string {
    if (startDate > endDate) {
      return 'Expired';
    }

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    let days = endDate.getDate() - startDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0).getDate();
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} years, ${months} months, and ${days} days`;
  }

  filterData(): void {
    this.filteredData = this.inventoryData.filter(item => {
      const matchesType = this.typeFilter ? item.type.includes(this.typeFilter) : true;
      const matchesBrand = this.brandFilter ? item.brand.includes(this.brandFilter) : true;
      const matchesStatus = this.statusFilter ? item.status.includes(this.statusFilter) : true;
      const matchesShelfLife = this.filterByShelfLife(item);
      return matchesType && matchesBrand && matchesStatus && matchesShelfLife;
    });
  }

  filterByShelfLife(item: any): boolean {
    if (this.minYears === undefined && this.maxYears === undefined) {
      return true;
    }

    const [years, months, days] = item.shelfLife.split(',').map((part: string) => {
      const [value, unit] = part.trim().split(' ');
      return unit === 'years' ? parseInt(value, 10) :
             unit === 'months' ? parseInt(value, 10) / 12 :
             parseInt(value, 10) / 365;
    });

    const totalYears = years + months + days;

    if (this.minYears !== undefined && totalYears < this.minYears) {
      return false;
    }

    if (this.maxYears !== undefined && totalYears > this.maxYears) {
      return false;
    }

    return true;
  }

  clearFilters(): void {
    this.typeFilter = '';
    this.brandFilter = '';
    this.statusFilter = '';
    this.minYears = undefined;
    this.maxYears = undefined;
    this.filterData();
  }

  exportToExcel(): void {
    this.excelExportService.exportAsExcelFile(this.filteredData, 'ShelfLifeAnalysis');
  }



  }

