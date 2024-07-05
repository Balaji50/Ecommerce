import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient) { }


  isAthenticated(): boolean {
    if (sessionStorage.getItem("token") !== null) {
      return true;
    }
    else {
      return false;
    }
  }

  canAccess() {
    if (!this.isAthenticated()) {
      //redirect to login page
      this.router.navigate(["users", "login"])
    }
  }

  canAuthenticate() {
    if (this.isAthenticated()) {
      //redirect to home page
      this.router.navigate(["home"])
    }
  }

  register(name: string, email: string, password: string) {
    return this.http.post<{ idToken: string }>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7xHn7PqE8DIPbAq_76CtmN_FNhXgwVd8",
      { displayname: name, email: email, password: password })
  }

  storeToken(token: string) {
    sessionStorage.setItem("token", token);
  }

  login(email: string, password: string) {
    return this.http
      .post<{ idToken: string }>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7xHn7PqE8DIPbAq_76CtmN_FNhXgwVd8", {
        email: email, password: password
      })
  }

  // Logout Function
  removeToken() {
    sessionStorage.removeItem("token");
  }
}


