import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/cart.service';
import { CartItem } from '../../cart/cart.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent implements OnInit {
  transactionId!: string;
  items!: CartItem[];
  total!: number;
  address!: string;
  showPrompt: boolean = false;
  feedbackRating: number = 3;
  orderId!: number;
  private orderSuccessSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private router: Router,
    formBuilder: FormBuilder,
    private orderService: OrderDetailsService
  ) {
  }

  ngOnInit(): void {
    // this.orderId = Math.floor(Math.random() * 1000000) + 1; // Generate a random order ID
    // this.transactionId = 'TRX' + Math.floor(Math.random() * 1000000) + 1; // Generate a random transaction ID
    // this.items = this.cartService.getCartItems(); // Get cart items from cart service
    // this.total = this.cartService.getTotalPrice(); // Get total price from cart service

    // this.cartService.clearCart(); // Clear cart after successful order placement
    this.orderSuccessSubscription = this.orderService.onOrderSuccess().subscribe(orderData => {
      // Update component properties with order data
      this.orderId = orderData.orderId;
      this.transactionId = orderData.transactionId;
      this.items = orderData.items;
      this.total = orderData.total;
    });
  }

  showFeedbackPrompt(): void {
    this.showPrompt = true;
  }

  // submitFeedback(): void {
  //   // submit feedback logic here
  //   this.showPrompt = false;
  // }
}
