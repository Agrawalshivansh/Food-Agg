import { Component } from '@angular/core';
import { FoodItem } from './food-items';
import { soups, starters, curries, breads, mainCourses, desserts, iceCreams, milkshakes } from './food-items';
import { CartService } from '../cart/cart.service';
interface CartItem extends FoodItem {
  quantity: number;
}
@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.scss']
})
export class Menu1Component{

  cartItems: CartItem[] = [];
  selectedFilter: string = '';
  showVeg: boolean = false;
  showNonVeg: boolean = false;
  soups: FoodItem[] = soups;
  starters: FoodItem[] = starters;
  curries: FoodItem[] = curries;
  breads: FoodItem[] = breads;
  mainCourses: FoodItem[] = mainCourses;
  desserts: FoodItem[] = desserts;
  iceCreams: FoodItem[] = iceCreams;
  milkshakes: FoodItem[] = milkshakes;
  menuCategories: any;
  soup: any;
  cartMessage!: string;
  showCart = false;
  searchTerm: string = '';

  constructor(private cartService: CartService) {
    this.cartItems = cartService.getCartItems();
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

  getFilteredSoups() {
    return this.getFilteredItems(this.soups);
  }

  getFilteredStarters() {
    return this.getFilteredItems(this.starters);
  }

  getFilteredCurries() {
    return this.getFilteredItems(this.curries);
  }

  getFilteredBreads() {
    return this.getFilteredItems(this.breads);
  }

  getFilteredMainCourses() {
    return this.getFilteredItems(this.mainCourses);
  }

  getFilteredDesserts() {
    return this.getFilteredItems(this.desserts);
  }

  getFilteredIceCreams() {
    return this.getFilteredItems(this.iceCreams);
  }

  getFilteredMilkshakes() {
    return this.getFilteredItems(this.milkshakes);
  }
}

