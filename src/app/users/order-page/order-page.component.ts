import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  constructor(public service: GetproductService, public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(["/home"])
    }, 4000);

    this.service.removeAllCart();
  }
}
