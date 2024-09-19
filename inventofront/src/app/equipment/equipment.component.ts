import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent {
  @Input() isInCart: boolean = false;
  @Input() equipment: any;
  @Output() decreaseQuantity = new EventEmitter<any>();
  @Output() increaseQuantity = new EventEmitter<any>();
  @Output() openModal = new EventEmitter<string>();
  @Output() openRequestModal = new EventEmitter<any>();
  @Output() addToCart = new EventEmitter<any>();
  @Input() equipments!: any[];
  @Input() currentPage!: number;
  @Input() pageSize!: number;

  
  onDecreaseQuantity() {
    this.decreaseQuantity.emit(this.equipment);
  }

  onIncreaseQuantity() {
    this.increaseQuantity.emit(this.equipment);
  }



  onOpenModal(equipment: any) {
    this.openModal.emit(equipment);
  }

  onOpenRequestModal() {
    this.openRequestModal.emit(this.equipment);
  }

  onAddToCart(equipment: any) {
    this.addToCart.emit(equipment);
  }

}
