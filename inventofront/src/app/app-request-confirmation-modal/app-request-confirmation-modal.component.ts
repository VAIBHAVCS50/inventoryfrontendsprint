import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import {CategoryDetails} from '../../models/EquipmentetailsModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-app-request-confirmation-modal',
  templateUrl: './app-request-confirmation-modal.component.html',
  styleUrl: './app-request-confirmation-modal.component.scss'
})
export class AppRequestConfirmationModalComponent {
  @Input() equipment: any;
  @Output() confirm: EventEmitter<void> = new EventEmitter<void>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  @Input() title!: string;

  constructor(private modalService: NgbModal) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['equipment']) {
      console.log('Equipment received in modal:', this.equipment);
    }
  }
  
  confirmRequest() {
    this.confirm.emit();
  }

  cancelRequest() {
    this.cancel.emit();
  }

  onClose() {
    this.close.emit();
  }

}
