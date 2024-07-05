import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { GetproductService } from 'src/app/product-services/getproduct.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-laptoppage',
  templateUrl: './laptoppage.component.html',
  styleUrls: ['./laptoppage.component.css']
})
export class LaptoppageComponent implements OnInit{
  constructor(public router:Router, public prodectservice:GetproductService, public auth:AuthService){

  }

  public productDisplay:any[]=[];
  public productitems:any[]=[];

  ngOnInit(): void {
    this.getproduct();
  }

  getproduct(){
    this.prodectservice.getdata2().subscribe({
      next:(data:any)=>{
        this.productDisplay=data.products
       this.filterproduct();
      },
      error(error){
        console.log(error);
      }
    })
  }

  filterproduct(){
    this.productitems=this.productDisplay.filter((a:any)=>{
      return a.category=="laptops"
    })
  }

  addtocart(product:any){
   if( this.auth.isAthenticated()===true){
    this.prodectservice.addCart(product)
   }
   else{
    alert("Please Login")
    this.router.navigate(["users","login"])
   }
  }


}
