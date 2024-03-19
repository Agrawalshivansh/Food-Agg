import { Component, OnInit } from '@angular/core';
import { FoodItem } from './food-items';
// import { soups, starters, curries, breads, mainCourses, desserts, iceCreams, milkshakes } from './food-items';
import { starters, milkshakes } from './food-items';
import { CartService } from '../../cart/cart.service';

interface CartItem extends FoodItem {
  quantity: number;
}
@Component({
  selector: 'app-roadhouse',
  templateUrl: './roadhouse.component.html',
  styleUrls: ['./roadhouse.component.scss']
})
export class RoadhouseComponent implements OnInit {

  // constructor() { }

  // ngOnInit(): void {
  // }
  cartItems: CartItem[] = [];
  selectedFilter: string = '';
  showVeg: boolean = false;
  showNonVeg: boolean = false;
  starters: FoodItem[] = starters;
  milkshakes: FoodItem[] = milkshakes;
  menuCategories: any;
  soup: any;
  cartMessage!: string;
  showCart = false;
  searchTerm: string = '';
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getCartItems();
  }
  
ngOnInit(): void {
  this.cartItemCount = this.cartService.getCartItems().reduce((total, item) => total + item.quantity, 0);

}
  addItemToCart(item: FoodItem) {
    const cartItem = {...item, quantity: 1};
    this.cartService.addItemToCart(cartItem);
    this.cartMessage = `Adding ${item.name} to cart...`;
    this.showCart = true; // display the box
    setTimeout(() => {
      this.cartMessage = ''; // hide the box after a delay
      this.showCart = false;
    }, 2000);
  }

  filterItems(type: string) {
    this.selectedFilter = type;
  }

  getFilteredItems(foodArray: FoodItem[]): FoodItem[] {
    let filteredArray = foodArray.filter(item => {
      if (!this.selectedFilter) {
        return (this.showVeg && item.type === 'veg') || (this.showNonVeg && item.type === 'non-veg') || (!this.showVeg && !this.showNonVeg);
      } else {
        return item.type === this.selectedFilter;
      }
    });

    if (this.searchTerm) {
      filteredArray = filteredArray.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    return filteredArray;
  }


  getFilteredStarters() {
    return this.getFilteredItems(this.starters);
  }


  getFilteredMilkshakes() {
    return this.getFilteredItems(this.milkshakes);
  }
}

