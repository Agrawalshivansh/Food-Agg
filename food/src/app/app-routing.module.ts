import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { OfferComponent } from './offer/offer.component';
import { SupportComponent } from './support/support.component';
import { ToyComponent } from './beverages/toy/toy.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { OrderSuccessComponent } from './orders/order-success/order-success.component';
import { PaymentComponent } from './orders/payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Menu1Component } from './menu1/menu1.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './menu/items/items.component';
import { BrassComponent } from './main-course/brass/brass.component';
import { BaskinComponent } from './desserts/baskin/baskin.component';
import { AuthguardService } from './Services/authguard.service';
const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'user-menu', component: ItemsComponent },
  { path: 'menu', component: ItemsComponent },
  {path:'login', component:LoginComponent },
  { path:'', component:LandingComponent },
  { path:'register', component:RegisterComponent },
  { path:'forgot', component:ForgotComponent },
  { path:'logout', component:LogoutComponent },
  {path:'user-profile',component:UserProfileComponent},
  {path:'profile',component:ProfileComponent},
  { path: '',   redirectTo: '/landing', pathMatch: 'full' },
  { path:'support',component:SupportComponent },
  { path:'dashboard',component:DashboardComponent,   },
  // canActivate: [AuthguardService]
  { path:'offer',component:OfferComponent },
  { path: 'starters',component:ItemsComponent },
  { path: 'main-course',component:BrassComponent  },
  { path:'desserts',component:BaskinComponent },
  { path:'beverages',component:ToyComponent},
  {path:'menu1', component:Menu1Component},
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'confirm',component:OrderSuccessComponent},
  { path: 'checkout', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
