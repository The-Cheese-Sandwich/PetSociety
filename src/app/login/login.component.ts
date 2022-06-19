import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

show: boolean = false;
public textoemail: string="";
public textopassword: string="";

constructor(private router: Router, public dialog: MatDialog) {
}
  password() {
    this.show = !this.show;
  }  

  ngOnInit(): void {
  }

  validateData(){

    this.router.navigate(['dash']);
  }
  openModal() {
    const dialogRef = this.dialog.open(SignupComponent);

  }

}
