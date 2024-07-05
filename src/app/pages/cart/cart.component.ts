import { Component, ElementRef, ViewChild } from '@angular/core';
import { GetproductService } from 'src/app/product-services/getproduct.service';
import { OnInit} from '@angular/core';
import { NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;
  public productItems!: number;

  constructor(public products: GetproductService, public router:Router) { }

  ngOnInit(): void {
    // get product form sercive and total price
    this.products.getProduct().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.products.getTotalPrice();
    })

    // product items length
    this.products.getProduct().subscribe((data: any) => {
      this.productItems = data.length;
      console.log(data.length);
    })

  }

  // remove items form cart
  removeItems(items:any){
    this.products.removeCartItems(items);
  }

  // clear all cart items
  emptyCart() {
    this.products.removeAllCart();
  }
  
  checkOut(){
    this.router.navigate(["users","checkout"]);
  }
}

