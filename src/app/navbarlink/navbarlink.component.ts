import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Auth-Services/auth.service';
import { GetproductService } from '../product-services/getproduct.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-navbarlink',
  templateUrl: './navbarlink.component.html',
  styleUrls: ['./navbarlink.component.css']
})
export class NavbarlinkComponent implements OnInit {

  constructor(private router: Router, public auth: AuthService, public product: GetproductService) { }

  public list = false;
  public totalCartItems!: number

  ngOnInit(): void {
    this.product.getProduct().subscribe((res) => {
      this.totalCartItems = res.length;
    })
  }
  onClickSearchBar() {
    this.product.showSearchService()
  }

  searchBarisOpen(): boolean {
    return this.product.searchBarisOpen();
  }

  dropDown() {
    this.list = !this.list;
  };

  // lazy router target
  navigateLogin() {
    this.router.navigate(["users", "login"])
  }

  navigateRegister() {
    this.router.navigate(["users", "register"])
  }

  logOut() {
    this.auth.removeToken();
    this.auth.canAccess();
    this.router.navigate(['home']);
    confirm("Logout Successfully")
  }

}
