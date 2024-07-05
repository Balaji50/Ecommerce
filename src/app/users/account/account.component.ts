import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(public auth:AuthService, public router:Router){}

  navigateLogin(){
    this.router.navigate(["users","login"]);
  }
  navigateRegister(){
    this.router.navigate(["users","register"])
  }
  onLogout(){ 
    this.auth.removeToken();
    this.auth.canAccess();
    this.router.navigate(['home']);
    confirm("Logout Successfully")
  }

}
