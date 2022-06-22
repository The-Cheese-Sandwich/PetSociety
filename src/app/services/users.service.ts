import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../models/user.model";
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { SignupComponent } from "../signup/signup.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable({ providedIn: 'root'})
export class UsersService {

  private token: string;
  private tokenTimer: any;
  private isAuthenticated = false;
  private userId: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {}

  getToken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getUserId(){
    return this.userId; 
  }

  createUser(email: string, password: string , username : string) {
    const userData: User = {email:email, password: password , username: username } 
    this.http
    .post<{}>("http://localhost:3000/api/user/signup", userData)
    .subscribe( response => {
        console.log(response);
        alert("El usuario se creo correctamente")
        const dialogRef = this.dialog.closeAll()
      }, 
      err=>{
        console.log(err);
        alert("El email ya esta en uso")
      }
      );
  }

  getUser() {
    return this.http.get<{
      _id: string;
      email: string;
      password: string;
      username : string;
    }>("http://localhost:3000/api/user/" + this.userId);
  }


  login(email: string, password: string) {
    const userData: User = { email: email, password: password  , username: ""};
    this.http
      .post<{ token: string; expiresIn: number; userId: string }>(
        "http://localhost:3000/api/user/login",
        userData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.userId = response.userId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate, this.userId);
          this.router.navigate(["/"]);
        }
      }, 
      err=>{
        console.log(err);
        alert("El email o la contraseña no son correctos")
      }
      );
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(["/"]);
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private setAuthTimer(duration: number) {
    console.log("Setting timer: " + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expirationDate.toISOString());
    localStorage.setItem("userId", userId)
  }

  private clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    localStorage.removeItem("userId");

  }

  private getAuthData() {
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration");
    const userId = localStorage.getItem("userId")
    if (!token || !expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate),
      userId: userId
    }
  }
}