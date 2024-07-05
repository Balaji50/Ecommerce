import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { GetproductService } from 'src/app/product-services/getproduct.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public getitems: any[] = [];
  public getitems2: any[] = [];




  //service class name
  constructor(private GetproductService: GetproductService, private router: Router, private auth: AuthService) { }

  // to get value form httpclient
  ngOnInit(): void {
    this.jsondata()
    this.jsondata2()
  };

  jsondata() {
    this.GetproductService.getdata().subscribe({
      next: (data) => {
        this.getitems = data.slice(0, 8)
      },

      error: (error) => {   //if any error it show error
        console.log(error)
      }
    });
  }

  jsondata2() {
    this.GetproductService.getdata2().subscribe({
      next: (data2) => {
        this.getitems2 = data2.products.slice(0, 8);

        // to add  quantity and total
        this.getitems2.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price })
        });
        console.log(this.getitems2)
      },
      error: (error) => {   //if any error it show error
        console.log(error)
      }
    })
  }

  navigateMobile() {
    this.router.navigate(["navigateitems", "mobilepage"])
  }

  addtocart(offer:any) {
    if (this.auth.isAthenticated() === true) {
       return this.GetproductService.addCart(offer);
    }
     alert("Please Login");
     this.router.navigate(["users","login"])
  }

}

