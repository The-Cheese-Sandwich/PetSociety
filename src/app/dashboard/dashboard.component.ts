import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CrearPublicacionComponent } from '../crear-publicacion/crear-publicacion.component';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public username ?: string

  constructor( public dialog: MatDialog, private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user: User) => {
      this.username = user.username;
    });
  }
  openModal() {
    this.dialog.open(CrearPublicacionComponent)
  }

  logout(){
    this.router.navigate(['login']);
  }

  opbutton(){
    var list = document.getElementsByClassName('cerrarsesion');
    list[0].classList.toggle('hide');
  }


}
