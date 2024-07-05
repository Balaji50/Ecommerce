import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { AccountComponent } from './users/account/account.component';
import { ProductDetailsComponent } from './navigateitems/product-details/product-details.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"", redirectTo:"home",pathMatch:'full'},
{path:"cart",component:CartComponent},
{path:'account', component:AccountComponent},
{path:"proddetails" , component:ProductDetailsComponent},
{path:"details/:productid" , component:DetailsComponent},

{path:"users", loadChildren:()=> import('./users/users.module').then(m => m.UsersModule)},
{path:"navigateitems", loadChildren:()=> import('./navigateitems/navigateitems.module').then(m=>m.NavigateitemsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
