import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../Services/search.service';
import { ActivatedRoute } from '@angular/router';
export interface Category {
  // id: number;
  categoryId: string;
  categoryName: string;
  imageUrl: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: Category[] = 
  [];
  categoryId: string;
  topRestaurants: any[] = [];
  // favoriteItems: any[] = [];
  constructor(public router:Router, private searchservice:SearchService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    this.getTopRestaurants();
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
    });
  }
  getCategories(): void {
    this.searchservice.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }
  getTopRestaurants(): void {
    this.searchservice.getTopRestaurants().subscribe(
      (data) => {
        this.topRestaurants = data;
      },
      (error) => {
        console.error('Error fetching top restaurants:', error);
      }
    );
  }
}
