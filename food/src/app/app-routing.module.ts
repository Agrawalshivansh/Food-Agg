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
import { StartersComponent } from './starters/starters.component';
import { MainCourseComponent } from './main-course/main-course.component';
import { DessertsComponent } from './desserts/desserts.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './menu/items/items.component';
import { RoadhouseComponent } from './starters/roadhouse/roadhouse.component';
import { BistraComponent } from './starters/bistra/bistra.component';
import { BigyComponent } from './starters/bigy/bigy.component';
import { DelhihComponent } from './starters/delhih/delhih.component';
import { Cafe18Component } from './starters/cafe18/cafe18.component';
import { SpiceComponent } from './starters/spice/spice.component';
import { MaxoutComponent } from './starters/maxout/maxout.component';
import { ImperfectoComponent } from './starters/imperfecto/imperfecto.component';
import { LocalComponent } from './starters/local/local.component';
import { BrassComponent } from './main-course/brass/brass.component';
import { CitrusComponent } from './main-course/citrus/citrus.component';
import { JamavarComponent } from './main-course/jamavar/jamavar.component';
import { ShangComponent } from './main-course/shang/shang.component';
import { SignatureComponent } from './main-course/signature/signature.component';
import { SsaffronComponent } from './main-course/ssaffron/ssaffron.component';
import { TerraceComponent } from './main-course/terrace/terrace.component';
import { YauatchaComponent } from './main-course/yauatcha/yauatcha.component';
import { ZenComponent } from './main-course/zen/zen.component';
import { BaskinComponent } from './desserts/baskin/baskin.component';
import { BelgianComponent } from './desserts/belgian/belgian.component';
import { CakecityComponent } from './desserts/cakecity/cakecity.component';
import { CheeseComponent } from './desserts/cheese/cheese.component';
import { DonaldComponent } from './desserts/donald/donald.component';
import { FrozenComponent } from './desserts/frozen/frozen.component';
import { GianisComponent } from './desserts/gianis/gianis.component';
import { KevenComponent } from './desserts/keven/keven.component';
import { WaffleComponent } from './desserts/waffle/waffle.component';
import { BaristaComponent } from './beverages/barista/barista.component';
import { CostaComponent } from './beverages/costa/costa.component';
import { IrishComponent } from './beverages/irish/irish.component';
import { MosComponent } from './beverages/mos/mos.component';
import { PluckComponent } from './beverages/pluck/pluck.component';
import { ShiroComponent } from './beverages/shiro/shiro.component';
import { SmokefComponent } from './beverages/smokef/smokef.component';
import { StarbucksComponent } from './beverages/starbucks/starbucks.component';
import { ToyComponent } from './beverages/toy/toy.component';
import { MyOrdersComponent } from './orders/my-orders/my-orders.component';
import { OrderSuccessComponent } from './orders/order-success/order-success.component';
import { PaymentComponent } from './orders/payment/payment.component';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Menu1Component } from './menu1/menu1.component';
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
  { path:'dashboard',component:DashboardComponent },
  { path:'offer',component:OfferComponent },
  { path: 'starters',component:ItemsComponent },
  { path: 'main-course',component:BrassComponent  },
  { path:'desserts',component:BaskinComponent },
  { path:'beverages',component:ToyComponent},
  { path:'roadhouse', component: RoadhouseComponent },
  { path:'bistra', component:BistraComponent },
  { path:'bigy', component:BigyComponent },
  { path:'delhih', component:DelhihComponent },
  { path:'cafe18', component:Cafe18Component },
  { path:'maxout', component:MaxoutComponent },
  {path:'menu1', component:Menu1Component},
  { path:'spice', component:SpiceComponent },
  { path:'imperfecto', component:ImperfectoComponent },
  { path:'local', component:LocalComponent },
  { path:'brass', component:BrassComponent },
  { path:'citrus', component:CitrusComponent },
  { path:'jamavar', component:JamavarComponent },
  { path:'shang', component:ShangComponent },
  { path:'signature', component:SignatureComponent },
  { path:'ssaffron', component:SsaffronComponent },
  { path:'terrace', component:TerraceComponent },
  { path:'yauatcha', component:YauatchaComponent },
  { path:'zen', component:ZenComponent },
  { path:'baskin', component:BaskinComponent },
  { path:'belgian', component:BelgianComponent },
  { path:'cakecity', component:CakecityComponent },
  { path:'cheese', component:CheeseComponent },
  { path:'donald', component:DonaldComponent },
  { path:'frozen', component:FrozenComponent },
  { path:'gianis', component:GianisComponent },
  { path:'keven', component:KevenComponent },
  { path:'waffle', component:WaffleComponent },
  { path:'barista', component:BaristaComponent },
  { path:'costa', component:CostaComponent },
  { path:'irish', component:IrishComponent },
  { path:'mos', component:MosComponent },
  { path:'pluck', component:PluckComponent },
  { path:'shiro', component:ShiroComponent },
  { path:'smokef', component:SmokefComponent },
  { path:'starbucks', component:StarbucksComponent },
  { path:'toy', component:ToyComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'confirm',component:OrderSuccessComponent},
  { path: 'checkout', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
