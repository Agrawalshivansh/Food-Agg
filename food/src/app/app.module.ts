import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LogoutComponent } from './logout/logout.component';
import { OfferComponent } from './offer/offer.component';
import { SupportComponent } from './support/support.component';
import { ProfileComponent } from './profile/profile.component';
import { StartersComponent } from './starters/starters.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { ForgotComponent } from './forgot/forgot.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './menu/items/items.component';
import { FooterComponent } from './footer/footer.component';
import { ToyComponent } from './beverages/toy/toy.component';
import { BaskinComponent } from './desserts/baskin/baskin.component';
import { BrassComponent } from './main-course/brass/brass.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { OrderSuccessComponent } from './orders/order-success/order-success.component';
import { PaymentComponent } from './orders/payment/payment.component';
import { HeaderComponent } from './header/header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Menu1Component } from './menu1/menu1.component';
@NgModule({
  declarations: [
    AppComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    PaymentComponent,
    FooterComponent,
    CartComponent,
    ItemsComponent,
    LoginComponent,
    LandingComponent,
    RegisterComponent,
    ForgotComponent,
    DashboardComponent,
    LogoutComponent,
    OfferComponent,
    SupportComponent,
    ProfileComponent,
    FooterComponent,
    StartersComponent,
    MainCourseComponent,
    DessertsComponent,
    BeveragesComponent,
    ToyComponent,
    BaskinComponent,
    BrassComponent,
    HeaderComponent,
    UserProfileComponent,
    Menu1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
