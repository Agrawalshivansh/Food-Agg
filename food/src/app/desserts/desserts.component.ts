import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['./desserts.component.scss']
})
export class DessertsComponent implements OnInit {

  constructor(public router:Router) { }
  ngOnInit(): void {
  }
  navigateToDesserts(link: string): void {
    this.router.navigateByUrl(link);
  }

  desserts = [
    {
      title: 'Cheesecake & Co.',
      description: 'Cheesecake lovers, rejoice! Dive into our eggless delights and discover gourmet perfection at our bakery. ',
      image: 'https://therecipecritic.com/wp-content/uploads/2022/07/oreocheesecake-2-1.jpg',
      link:'/cheese',
    },

    {
      title: 'Donalds',
      description: 'Donalds Pastry Shop is a F&B-Casual Dining outlet that offers a wide variety of freshly baked pastries, cakes, and other desserts.',
      image: 'https://static.toiimg.com/photo/48053424.cms',
      link:'/donald',
    },
    
    {
      title: 'The Belgian Waffle Co.',
      description: 'The Belgian Waffle Co. a food franchise that provides freshly baked and delicious waffles around India.',
      image: 'https://imgmedia.lbb.in/media/2019/11/5dca4dad53703c2f98a05a30_1573539245091.jpg',
      link:'/belgian',
    },
    
    {
      title: 'Frozen Bottle - Milkshakes, Desserts And Ice Cream',
      description: 'Milkshakes, Thickshakes, Desserts Jars, Sundae, Gudbud, Cold Coffee Frappe, Ice Creams.',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/526e8ec7803bf2eb74cf75b9c9e24093 ',
      link:'/frozen',
    },
    
    {
      title: 'L - Waffle De Paris',
      description: 'Brownie Bites, Triple Chocolate Waffle & more at L - Waffle de Paris.',
      image: 'https://www.thedailymeal.com/img/gallery/the-history-of-the-waffle-dates-all-the-way-back-to-the-middle-ages/intro-1670099255.jpg',
      link:'/waffle',
    },
    
    {
      title: 'Baskin Robbins - Ice Cream Desserts',
      description: 'This flavoured sweet treat is a universal favourite! ',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/85ccae4e3576f9330af102c46ca85395',
      link:'/baskin',
    },
    
    {
      title: 'Keventers Ice Cream',
      description: 'Milkshakes · Thick Shakes · Iced Beverages · Ice Cream Packs · Sundaes · Hot Chocolate.',
      image: 'https://imgmedia.lbb.in/media/2019/12/5dfccefc12ceb72efbd026dd_1576849148069.jpg',
      link:'/keven',
    },
    
    {
      title: 'Gianis - Ice Cream, Shakes & Sundaes',
      description: 'The original sundae with a twist, a rich moist brownie gets soaked in our classic Vanilla Ice cream drooled with fudge sauce & nuts. more.',
      image: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/dipo3zzlmterk54zoyun',
      link:'/gianis',
    },


    {
      title: 'The Cakecity Patisserie',
      description: 'TheCakecityPatisserie Indulge in exquisite flavors at Cake City Patisserie, where artistry meets delectable desserts.',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/ec/e0/bf/belgium-chocolate-hazelnut.jpg',
      link:'/cakecity',
    },



  ];

}

