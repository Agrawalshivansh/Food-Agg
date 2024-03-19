import { Injectable } from '@angular/core';
import { FoodItem } from '../menu/items/food-items';

export interface CartItem extends FoodItem {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: CartItem[] = [];
  getDeliveryAddress: any;

  constructor() { }

  addItemToCart(item: CartItem) {
    let existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({...item, quantity: 1});
    }
  }

  removeItemFromCart(item: CartItem) {
    let existingItem = this.cartItems.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity === 0) {
        const index = this.cartItems.indexOf(existingItem);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
    }
  }

  clearCart() {
    this.cartItems = [];
  }

  getCartItems() {
    return this.cartItems;
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalAmount() {
    return this.getTotalPrice();
  }
}
