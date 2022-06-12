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

  changeState(id : string){
    var list = document.getElementsByClassName('selected');
    if(list.length > 0) {      
      list[0].classList.toggle('deselect');
      list[0].classList.toggle('selected');
    } 
    document.getElementById(id)?.classList.toggle('deselect'); 
    document.getElementById(id)?.classList.toggle('selected');
  }

}
