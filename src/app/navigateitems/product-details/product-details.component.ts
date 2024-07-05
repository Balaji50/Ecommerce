import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
   Details:any=[];

   constructor(private productservice:GetproductService){}

  ngOnInit(): void {
    
  }

  productDetails(){
         this.productservice.getProduct().subscribe((data)=>{
          this.Details=data
         })
  }
}
