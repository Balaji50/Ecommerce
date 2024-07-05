import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-offerpage',
  templateUrl: './offerpage.component.html',
  styleUrls: ['./offerpage.component.css']
})
export class OfferpageComponent {
  constructor(public router:Router, public auth: AuthService, public productservice: GetproductService) {

  }

  public productDisplay: any[] = [];

  ngOnInit(): void {
    this.getproduct()
  }

  getproduct() {
    this.productservice.getdata().subscribe({
      next: (data: any) => {
        this.productDisplay = data
      },
      error: (error) => {
        console.log(error);
      }
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
