import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { NavbarlinkComponent } from './navbarlink/navbarlink.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchbarComponent } from './pages/searchbar/searchbar.component';
import { FilterPipe } from './pipefolder/filter.pipe';
import { NavigateitemsModule } from './navigateitems/navigateitems.module';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    NavbarlinkComponent,
    SearchbarComponent,
    FilterPipe,
    DetailsComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    NavigateitemsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
