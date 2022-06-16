import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

show: boolean = false;
public textoemail: string="";
public textopassword: string="";

constructor(private router: Router) {
}
  password() {
    this.show = !this.show;
  }  

  ngOnInit(): void {
  }

  validateData(){

    this.router.navigate(['dash']);
  }

}
