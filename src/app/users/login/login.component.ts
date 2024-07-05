import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Auth-Services/auth.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }

  formdata = { email: "", password: "" };
  submit = false;
  errorMessage = "";
  loadingIcon = false;

  navigateRegister() {
    this.router.navigate(['users', 'register'])
  }

  onSubmite() {
    this.loadingIcon = true;

    this.auth.login(this.formdata.email, this.formdata.password).subscribe({
      next: data => {
        // store Token
        this.auth.storeToken(data.idToken);
        console.log("logged user token :" + data.idToken);
        this.auth.canAuthenticate();
      },
      error: data => {
        if (data.error.error.message == "INVALID_PASSWORD" || "INVALID_EMAIL") {
          this.errorMessage = "Invalid Credentials!";
        } else {
          this.errorMessage = "Unkown Error when login account"
        }
      }
    }).add(() => {
      this.loadingIcon = false;
      console.log("Login Successfull");
      
    })
  }
}

