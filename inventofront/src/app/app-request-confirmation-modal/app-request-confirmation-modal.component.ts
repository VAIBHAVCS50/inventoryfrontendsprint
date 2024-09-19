import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {CategoryDetails} from '../../models/EquipmentetailsModel';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-app-request-confirmation-modal',
  templateUrl: './app-request-confirmation-modal.component.html',
  styleUrl: './app-request-confirmation-modal.component.scss'
})
export class AppRequestConfirmationModalComponent implements OnInit {
  @Input() requestData: any;
  // @Output() confirm = new EventEmitter<{ action: string, remarks: string }>();
  // @Output() confirmwitoutremark = new EventEmitter<void>();
  // @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  // @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() title!: string;
  remarks: string = '';

  constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {}
  ngOnInit(): void {
    console.log(this.title);
    console.log(this.requestData);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['requestData']) {
      console.log('Equipment received in modal:', this.requestData);
    }
  }
  
  confirmRequestwithremark() {
    this.activeModal.close({ confirmed: true, remarks: this.remarks });
  }

  confirmRequestwithoutremark(){
    this.activeModal.close("confirmed");

  }
  cancelRequest() {
    // Logic to cancel the request
    this.activeModal.dismiss('cancelled');
  }


  onClose() {
    this.activeModal.close();
  }

}




