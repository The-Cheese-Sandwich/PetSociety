import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // variable - default false
show: boolean = false;

constructor() {
}

// click event function toggle

  password() {
    this.show = !this.show;
  }  

  ngOnInit(): void {
  }


}
