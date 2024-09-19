import { Component, Input, OnInit, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { GetequipmentService } from '../getEquipmentService/getequipment.service';
import { RequestequipmentService } from '../requestequipment.service';
import { AlertmessageService } from '../alertmessage.service';
import { Subscription } from 'rxjs';
import { SignalRService } from '../signal-r.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gatepass-history',
  templateUrl: './gatepass-history.component.html',
  styleUrl: './gatepass-history.component.scss'
})
export class GatepassHistoryComponent implements OnInit, OnChanges {
returnEquipment(arg0: any) {
throw new Error('Method not implemented.');
}
  @Input() data: any[] = [];
  @Input() currentPage: number = 1;
  @Input() pageSize: number = 10;
  @Input() pages: number[] = [];
  @Input() formdata: string = '';
  loading: boolean = false;
  @Output() refreshData = new EventEmitter<void>();

  filteredData: any[] = [];
  paginatedData: any[] = [];
  selectedGatepass: any;
  showModal: boolean = false;
  selectedEquipments: any[] = [];

  constructor(
    private ele: RequestequipmentService,
    private fgs: AlertmessageService,
    private signalRService: SignalRService
  ) {}

  ngOnInit(): void {
    this.filterData();
    this.signalRService.psc$.subscribe(() => {
      this.refreshData.emit();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['formdata']) {
      this.filterData();
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.paginateData();
  }

  openEquipmentModal(gatepass: any) {
    this.selectedGatepass = gatepass;
    this.selectedEquipments = gatepass.equipments.map((equipment: any) => ({
      ...equipment,
      useCurrentLocation: false,
      newLocation: ''
    }));
    this.showModal = true;
  }

  closeEquipmentModal() {
    this.showModal = false;
    this.selectedGatepass = null;
    this.selectedEquipments = [];
  }

  setNewLocationToCurrent(equipment: any) {
    if (equipment.useCurrentLocation) {
      equipment.newLocation = equipment.physicallocation;
    } else {
      equipment.newLocation = '';
    }
  }

  submitEquipmentData() {
    const equipments = this.selectedEquipments
      .filter(equipment => equipment.newLocation && equipment.newLocation !== '')
      .map(equipment => ({
       
        equipmentId: equipment.serialNumber,
        newLocation: equipment.newLocation,
    
      }));

    if (equipments.length === 0) {
      // Handle case where no valid equipment is selected for submission
      return;
    }

    const payload = {
      gatepassId: this.selectedGatepass.gatepassId,
      equipments: equipments
    };

    this.loading = true;
    this.ele.submitEquipmentRequest(payload).subscribe(
      response => {
        console.log('Success:', response);
        this.fgs.showSnackBar("Submission Request Success");
        this.loading = false;
        this.signalRService.requestEquipmentUpdate();
        this.filterData();
        this.closeEquipmentModal();
      },
      error => {
        console.error('Error:', error);
        this.fgs.showSnackBar("An error occurred");
        this.loading = false;
        this.closeEquipmentModal();
      }
    );
  }

  approveSubmission(gatepassId: number) {
    this.loading = true;
    this.ele.submitEquipment(gatepassId).subscribe(
      response => {
        console.log('Success:', response);
        this.fgs.showSnackBar("Equipment successfully received");
        this.loading = false;
        this.signalRService.requestEquipmentUpdate();
        this.filterData();
      },
      error => {
        console.error('Error:', error);
        this.fgs.showSnackBar("An error occurred");
        this.loading = false;
      }
    );
  }

  filterData(): void {
    if (this.formdata === 'submit-equipment') {
      this.filteredData = this.data;
    } else if (this.formdata === 'approve-submit-equipment') {
      this.filteredData = this.data.filter(item => item.submission);
    } else {
      this.filteredData = this.data;
    }
    this.updatePages();
    this.paginateData();
  }

  updatePages(): void {
    this.pages = Array.from({ length: Math.ceil(this.filteredData.length / this.pageSize) }, (_, i) => i + 1);
  }

  paginateData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = this.currentPage * this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }
}
