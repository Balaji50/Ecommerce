import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { LaptoppageComponent } from './laptoppage/laptoppage.component';
import { MenfashionComponent } from './menfashion/menfashion.component';
import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { OfferpageComponent } from './offerpage/offerpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path:"mobilepage", component:MobilepageComponent},
  {path:"laptoppage", component:LaptoppageComponent},
  {path:"menfashion", component:MenfashionComponent},
  {path:"womenfashion", component:WomenfashionComponent},
  {path:"offerpage", component:OfferpageComponent},
  {path: 'product_Details/:id', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigateitemsRoutingModule { }
