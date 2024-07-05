import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigateitemsRoutingModule } from './navigateitems-routing.module';
import { MobilepageComponent } from './mobilepage/mobilepage.component';
import { LaptoppageComponent } from './laptoppage/laptoppage.component';
import { MenfashionComponent } from './menfashion/menfashion.component';
import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { OfferpageComponent } from './offerpage/offerpage.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    MobilepageComponent,
    LaptoppageComponent,
    MenfashionComponent,
    WomenfashionComponent,
    OfferpageComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    NavigateitemsRoutingModule
  ]
})
export class NavigateitemsModule { }
