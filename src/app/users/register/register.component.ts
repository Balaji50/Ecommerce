import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  formdata = { name: "", email: "", password: "" };
  submit = false;
  errormessage = "";
  Loadingicon = false;

  // navigat to login page
  navigateLogin() {
    this.router.navigate(['users', 'login'])
  }

  //buton function
  // onClick() {
  //   alert("Thank for Choosing Shopkaro")
  //   this.router.navigate(['home'])
  // }

  onSubmite() {
    this.Loadingicon = true;

    //call register service
    this.auth.register(this.formdata.name, this.formdata.email, this.formdata.password).subscribe({
      next: data => {

        //store token from responsive data to pass tha data here to (auth)=StoreToken function
        this.auth.storeToken(data.idToken)
        console.log("token id :" + data.idToken)
        this.auth.canAuthenticate();
      },
      error: data => {
        if (data.error.error.message == "INVALID_EMAIL") {
          this.errormessage = "Invalid Email"
        } else if (data.error.error.message == "EMAIL_EXISTS") {
          this.errormessage = "Already Email Exists"
        } else {
          this.errormessage = "unknown error when creat this account"
        };
      }
    }).add(() => {
      this.Loadingicon = false;
      console.log("register completed")
    })
  }
};
