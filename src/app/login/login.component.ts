import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

show: boolean = false;
public textoemail: string="";
public textopassword: string="";

constructor() {
}
  password() {
    this.show = !this.show;
  }  

  ngOnInit(): void {
  }

  validateData(){
    if((this.textoemail.length ==0) && (this.textopassword == "") ){
      console.log(Error)
      return true;
    }else{
    console.log();
    
    return false;
    }
  }

}
