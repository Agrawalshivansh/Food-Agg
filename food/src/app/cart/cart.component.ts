import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { FoodItem } from '../menu/items/food-items';
import { faTrash,faPlus,faTimes,faMinus } from '@fortawesome/free-solid-svg-icons';

interface CartItem extends FoodItem {
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = [];
  faTrash = faTrash;
  faPlus = faPlus;
  faTimes = faTimes;
  faMinus = faMinus;

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getCartItems();
  }

  increaseItemQuantity(item: CartItem) {
    item.quantity = item.quantity + 1;
  }


  decreaseItemQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1;
    }
  }

  removeItemFromCart(item: CartItem) {
    this.cartService.removeItemFromCart(item);
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}
