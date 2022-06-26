import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

show: boolean = false;
public textoemail: string="";
public textopassword: string="";

constructor(private router: Router, public dialog: MatDialog, public userService: UsersService) {
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
  onLogin(form: NgForm) {
  
    if (form.invalid) {
      alert("Asegúrese de llenar todos los campos");
    } else if (this.verificacion(form.value.password)){
      alert("Contraseña o correo invalido");
    } else { 
    this.userService.login(form.value.email, form.value.password);
    }   
  }

  verificacion(pass : string): boolean{
    return pass.length < 8;
  }

}
