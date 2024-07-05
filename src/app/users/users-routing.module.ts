import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';

const routes: Routes = [
  {path:"login" ,component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"account", component:AccountComponent},
  {path:"order-page", component:OrderPageComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"paymentdetails", component:PaymentdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
