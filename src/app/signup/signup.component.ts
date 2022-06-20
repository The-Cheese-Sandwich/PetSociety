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

  constructor(private dialogRef: MatDialogRef<SignupComponent>, public userService: UsersService) { }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.createUser(form.value.email, form.value.password)
  }
  ngOnInit(): void {
  }
  
  close(){
    this.dialogRef.close();
  }

}
