import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit{

   constructor(public productService:GetproductService,public router:Router){}

   public receviewData:any='';

   ngOnInit(): void {
     this.productService.formDatas.subscribe((data)=>{
      this.receviewData = data;
     })
   }

   backToEdit(){
    this.router.navigate(["users", "checkout"]);
   }
}
