import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetproductService } from 'src/app/product-services/getproduct.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
constructor(public productService:GetproductService , public router:Router){}

public searchedProducts:any[]=[];
public productItems:any[]=[];

searchItems:any[]=[];

parentDiv(){
  return this.productService.showSearchService();
}

childDiv(event:Event){
  event.stopPropagation()
}


getdata(){
  this.productService.getProduct().subscribe((data)=>{
    this.searchedProducts=data
  })
}



products: any[] = [];
  filteredProducts: any[] = [];
  searchTerm = '';

  

  ngOnInit(): void {
    this.productService.getdata2().subscribe(data => {
      this.products = data.products;
    });
  }

  // Triggered on each keystroke in the search bar
  onSearch(): void {
    if (this.searchTerm.trim() !== '') {
      this.filteredProducts = this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // If the search term is empty, show no products
      this.filteredProducts = [];
    }

    if(this.filteredProducts.length>5){
      this.filteredProducts.length=5;
    }
  }
  
 
}
