import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/Services/order-details.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders: any[];

  constructor(private orderService: OrderDetailsService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(
      (data: any[]) => {
        this.orders = data;
      },
      error => {
        console.log('Error fetching orders:', error);
      }
    );
  }
}
