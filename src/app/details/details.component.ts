import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { GetproductService } from '../product-services/getproduct.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private products: GetproductService, private activatedrout: ActivatedRoute) { }

  public getProduct: any;
  public getAllDetails: any;

  ngOnInit(): void {
    this.getProduct = this.activatedrout.snapshot.paramMap.get('productid')
    //  console.log("product id is", this.getProduct);

    this.getProduct && this.products.produtDetails(this.getProduct).subscribe((res) => {
      this.getAllDetails = res;
      console.log(res);
    })
  }

  addCart(getAllDetails:any){

    this.products.addCart(getAllDetails);
  }

}
