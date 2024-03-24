import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoggedIn: boolean = false;
  displayName: string = '';
  constructor(private router: Router,private route: ActivatedRoute) {}
  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if (params['isLoggedIn'] === 'true') {
          this.isLoggedIn = true;
        }
    });
  }
  onLogin(): void {
    this.router.navigate(['/login']);
  }
  onLogout() {
    this.isLoggedIn = false;
    this.router.navigate(['/login'])
  }
  
  visitProfile() {
    let _name: string;
    this.router.navigate(['user-profile']);
  
  }
  onMyCart() {
    this.router.navigate(['cart']);
  }
  onMyOrders() {
    this.router.navigate(['my-orders']);
  }

  }
  
