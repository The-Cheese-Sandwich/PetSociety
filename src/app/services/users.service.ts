import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import {User} from "../models/user.model"

@Injectable({ providedIn: 'root'})
export class UsersService {

  constructor(private http: HttpClient) {}

createUser(email: string, password: string) {
    const userData: User = {email:email, password: password} 
    this.http
    .post<{}>("http://localhost:3000/api/user/signup", userData)
    .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const userData: User = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number }>(
        "http://localhost:3000/api/user/login",
        userData
      )
      .subscribe(response => {
        console.log(response);
      })
  }
}