import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { from } from 'rxjs';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  show: boolean = false;
  
  constructor(private dialogRef: MatDialogRef<SignupComponent>, public userService: UsersService) { }

  password() {
    this.show = !this.show;
  }  

  onSignup(form: NgForm) {
    if (form.invalid) {
      alert("Asegurese de llenar todos los capos");
    }
    else if (!this.verificacion(form.value.password)){
      var element = document.getElementById('pss');
      if ( element.classList.contains("hide") ){
        element.classList.toggle('hide');
      }
    }    
    else if(form.value.password != form.value.confirmPassword){
      var element1 = document.getElementById('pss');
      if ( !element1.classList.contains("hide") ){
        element1.classList.toggle('hide');
      }
      var element = document.getElementById('cpss');
      if ( element.classList.contains("hide") ){
        element.classList.toggle('hide');
      }
    }
    else{

      var element1 = document.getElementById('pss');
      if ( !element1.classList.contains("hide") ){
        element1.classList.toggle('hide');
      }
      var element = document.getElementById('cpss');
      if ( !element.classList.contains("hide") ){
        element.classList.toggle('hide');
      }

      this.userService.createUser(form.value.email, form.value.password, form.value.username);
    }
  }
  ngOnInit(): void {
  }
  
  close(){
    this.dialogRef.close();
  }

  verificacion(pass : string): boolean{
    var numero = false
    var min = false
    var may = false

    var numeros="0123456789"
    for(var i=0; i<pass.length; i++){
      if (numeros.indexOf(pass.charAt(i),0)!=-1){
        numero = true
      }
    }

    var minusculas="abcdefghyjklmn??opqrstuvwxyz";
    for(i=0; i<pass.length; i++){
        if (minusculas.indexOf(pass.charAt(i),0)!=-1){
          min = true;
        }
    }

    var mayusculas="ABCDEFGHYJKLMN??OPQRSTUVWXYZ";
    for(i=0; i<pass.length; i++){
        if (mayusculas.indexOf(pass.charAt(i),0)!=-1){
          may = true;
        }
    }

    return (numero && min && may && pass.length >= 8)
  }

}
