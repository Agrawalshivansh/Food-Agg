import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayName: string = '';
  isAdmin: boolean = false;
  constructor( private router: Router) { }
  ngOnInit(): void {
    
  }
  onLogin(){
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']); 
    }
  }
  onLogOut() {
    this.isLoggedIn = false;
  }
  
  visitProfile() {
    let _name: string;
    // _name = this.userDataService.getName.split(' ').join('-');
    this.router.navigate(['user-profile']);
  
  }
  onMyCart() {
    this.router.navigate(['cart']);
  }
  onMyOrders() {
    this.router.navigate(['my-orders']);
  }

  }
  
