import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartserviceService } from '../cartservice.service';
import { Profilee, UserdetailsService } from '../fetchuser/userdetails.service';
import { GetequipmentService } from '../getEquipmentService/getequipment.service';
import { NgbModal, NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { AppRequestConfirmationModalComponent } from '../app-request-confirmation-modal/app-request-confirmation-modal.component';
import { AlertmessageService } from '../alertmessage.service';
import { SignalRService } from '../signal-r.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { RequestequipmentService } from '../requestequipment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  // cartItems:any[]=[];
  cartItems: any[] = [];
  modalTitle: string = "Request Confirmation";
  activeOrdersSubscription?: Subscription;
  profile!: Profilee;
  showRequestModal: boolean = false;
  selectedEquipment!: any;
  loading: boolean = false;
  private offcanvasRef!: NgbOffcanvasRef;
  currentPage = 1;
  pageSize = 5;
  totalPages = 1;
  paginatedItems: any[] = [];

  constructor(
    private cartSidebar: CartserviceService,
    private gete: RequestequipmentService,
    private offcanvasService: NgbOffcanvas,
    private router: Router,
    private signalRService: SignalRService,
    private sda: AlertmessageService,
    private modalService: NgbModal,
    private equ: GetequipmentService,
    private ele: UserdetailsService,
    private cartService: CartserviceService
  ) {}

  ngOnInit(): void {
    this.activeOrdersSubscription = this.signalRService.psc$.subscribe(() => {
      this.updateItemQuantities();
    });

    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.updateItemQuantities();
      this.totalPages = Math.ceil(this.cartItems.length / this.pageSize);
      this.paginateItems();
    });

    this.ele.getuser().subscribe(profile => {
      this.profile = profile;
    });
  }

  paginateItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedItems = this.cartItems.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateItems();
    }
  }

  updateItemQuantities(): void {
    this.cartItems.forEach(cartItem => {
      this.gete.getQuantityBySpecification(cartItem.adoffice, cartItem.categoryId).subscribe(
        (response: any[]) => {
          const updatedItem = response.find(item => item.specificationId === cartItem.categoryId);
          if (updatedItem) {
            cartItem.quantity = updatedItem.quantity;
            if (cartItem.quantity <= 0) {
              this.removeFromCart(cartItem);
            }
          }
        },
        (error) => {
          console.error('Error updating item quantities:', error);
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.activeOrdersSubscription?.unsubscribe();
  }

  confirmRequest() {
    this.showRequestModal = false;
  }

  cancelRequest() {
    this.showRequestModal = false;
  }

  openRequestModal(cartItems: any[]) {
    this.selectedEquipment = cartItems;
    const modalRef = this.modalService.open(AppRequestConfirmationModalComponent, { centered: true });
    modalRef.componentInstance.title = this.modalTitle;
    modalRef.componentInstance.requestData = cartItems;
    modalRef.result.then((result) => {
      if (result === 'confirmed') {
        this.requestProduct();
      } else if (result === 'cancelled') {
        this.cancelRequest();
      }
    }, () => {
      this.cancelRequest();
    });
  }

  requestProduct() {
    this.loading = true;
    const requestData = {
      userId: this.profile.id,
      adoffice:this.selectedEquipment[0].adoffice,
      equipmentItems: this.selectedEquipment,
    };

    this.equ.requestProduct(requestData).subscribe(
      (response) => {
        this.loading = false;
        this.signalRService.requestEquipmentUpdate();
        this.sda.showSnackBar("Request Successful");
        this.clearCart();
        this.cartSidebar.closeSidebar();
        this.router.navigate(['/profile']);
      },
      (error) => {
        console.error('API error:', error);
        this.sda.showSnackBar(error.error);
        this.cartSidebar.closeSidebar();
        this.loading = false;
      }
    );
  }

  increaseQuantity(item: any) {
    if (item.requestedQuantity < item.quantity) {
      item.requestedQuantity += 1;
    }
  }

  decreaseQuantity(item: any) {
    if (item.requestedQuantity > 1) {
      item.requestedQuantity--;
    }
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.totalPages = Math.ceil(this.cartItems.length / this.pageSize);
    this.paginateItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.totalPages = 1;
    this.paginatedItems = [];
  }
}
