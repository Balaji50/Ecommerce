import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-womenfashion',
  templateUrl: './womenfashion.component.html',
  styleUrls: ['./womenfashion.component.css']
})
export class WomenfashionComponent {
  constructor(public router:Router, public auth: AuthService, public productservice: GetproductService) {

  }

  public productDisplay: any[] = [];
  public productItems: any[] = [];

  ngOnInit(): void {
    this.getproduct()
  }

  getproduct() {
    this.productservice.getdata().subscribe({
      next: (data: any) => {
        this.productDisplay = data
        this.filterproduct()

        this.productDisplay.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price })
        });
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  filterproduct() {
    this.productItems = this.productDisplay.filter((a: any) => {
      return a.category === "women's clothing";
    })
  }

  addtocart(product: any) {
    if (this.auth.isAthenticated() === true) {
      this.productservice.addCart(product);
    }
    else {
      alert("Please Login")
      this.router.navigate(["users", "login"]);
    }
  }
}
