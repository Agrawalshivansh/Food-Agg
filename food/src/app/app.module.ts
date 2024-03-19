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
import { RoadhouseComponent } from './starters/roadhouse/roadhouse.component';
import { BistraComponent } from './starters/bistra/bistra.component';
import { DelhihComponent } from './starters/delhih/delhih.component';
import { BigyComponent } from './starters/bigy/bigy.component';
import { Cafe18Component } from './starters/cafe18/cafe18.component';
import { MaxoutComponent } from './starters/maxout/maxout.component';
import { SpiceComponent } from './starters/spice/spice.component';
import { ImperfectoComponent } from './starters/imperfecto/imperfecto.component';
import { LocalComponent } from './starters/local/local.component';
import { IrishComponent } from './beverages/irish/irish.component';
import { ToyComponent } from './beverages/toy/toy.component';
import { MosComponent } from './beverages/mos/mos.component';
import { SmokefComponent } from './beverages/smokef/smokef.component';
import { StarbucksComponent } from './beverages/starbucks/starbucks.component';
import { BaristaComponent } from './beverages/barista/barista.component';
import { PluckComponent } from './beverages/pluck/pluck.component';
import { ShiroComponent } from './beverages/shiro/shiro.component';
import { CostaComponent } from './beverages/costa/costa.component';
import { CheeseComponent } from './desserts/cheese/cheese.component';
import { DonaldComponent } from './desserts/donald/donald.component';
import { BelgianComponent } from './desserts/belgian/belgian.component';
import { FrozenComponent } from './desserts/frozen/frozen.component';
import { WaffleComponent } from './desserts/waffle/waffle.component';
import { BaskinComponent } from './desserts/baskin/baskin.component';
import { KevenComponent } from './desserts/keven/keven.component';
import { GianisComponent } from './desserts/gianis/gianis.component';
import { CakecityComponent } from './desserts/cakecity/cakecity.component';
import { BrassComponent } from './main-course/brass/brass.component';
import { TerraceComponent } from './main-course/terrace/terrace.component';
import { SsaffronComponent } from './main-course/ssaffron/ssaffron.component';
import { ShangComponent } from './main-course/shang/shang.component';
import { YauatchaComponent } from './main-course/yauatcha/yauatcha.component';
import { JamavarComponent } from './main-course/jamavar/jamavar.component';
import { CitrusComponent } from './main-course/citrus/citrus.component';
import { ZenComponent } from './main-course/zen/zen.component';
import { SignatureComponent } from './main-course/signature/signature.component';
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
    RoadhouseComponent,
    BistraComponent,
    DelhihComponent,
    BigyComponent,
    Cafe18Component,
    MaxoutComponent,
    SpiceComponent,
    ImperfectoComponent,
    LocalComponent,
    IrishComponent,
    ToyComponent,
    MosComponent,
    SmokefComponent,
    StarbucksComponent,
    BaristaComponent,
    PluckComponent,
    ShiroComponent,
    CostaComponent,
    CheeseComponent,
    DonaldComponent,
    BelgianComponent,
    FrozenComponent,
    WaffleComponent,
    BaskinComponent,
    KevenComponent,
    GianisComponent,
    CakecityComponent,
    BrassComponent,
    TerraceComponent,
    SsaffronComponent,
    ShangComponent,
    YauatchaComponent,
    JamavarComponent,
    CitrusComponent,
    ZenComponent,
    SignatureComponent,
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
