import { Injectable } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  private cartKey = 'cartItems';
  private cartItems = new BehaviorSubject<any[]>(this.loadCartItems());
  cartItems$ = this.cartItems.asObservable();
  http: any;
  private offcanvasRef: NgbOffcanvasRef | null = null;

  constructor(private offcanvasService: NgbOffcanvas){

  }
  addToCart(item: any): boolean {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find(ci => ci.categoryId === item.categoryId);
    if (existingItem) {
      return false;
    } else {
      currentItems.push({ ...item });
      this.cartItems.next(currentItems);
      this.saveCartItems(currentItems);
      return true; 
    }
  }

  openSidebar():void {
    console.log(this.offcanvasRef);
    if (!this.offcanvasRef) {
      this.offcanvasRef = this.offcanvasService.open(CartComponent, {
        position: 'end', // Position of the sidebar ('start', 'end', 'top', 'bottom')
        panelClass: 'custom-offcanvas', // Custom CSS class for styling
      });

      this.offcanvasRef.result.finally(() => {
        this.offcanvasRef = null;
      });
    }

  }

  closeSidebar() {
    if (this.offcanvasRef) {
      this.offcanvasRef.close();
      this.offcanvasRef = null;
    }
  }



  getCartItems(): any[] {
    return this.cartItems.value;
  }

  removeFromCart(item: any): void {
    const currentItems = this.cartItems.getValue();
    const updatedItems = currentItems.filter(cartItem => cartItem.categoryId !== item.categoryId);
    this.cartItems.next(updatedItems);
    this.saveCartItems(updatedItems);
  }

  private saveCartItems(items: any[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(items));
  }

  private loadCartItems(): any[] {
    const savedCart = localStorage.getItem(this.cartKey);
    return savedCart ? JSON.parse(savedCart) : [];
  }

  clearCart(): void {
    this.cartItems.next([]);
    localStorage.removeItem(this.cartKey);
  }


  



}
