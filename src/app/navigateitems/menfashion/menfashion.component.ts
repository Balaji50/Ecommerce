import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { GetproductService } from 'src/app/product-services/getproduct.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-menfashion',
  templateUrl: './menfashion.component.html',
  styleUrls: ['./menfashion.component.css']
})
export class MenfashionComponent implements OnInit {
  constructor(public router: Router, public auth: AuthService, public productservice: GetproductService) {

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
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  filterproduct() {
    this.productItems = this.productDisplay.filter((a: any) => {
      return a.category == "men's clothing"
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
