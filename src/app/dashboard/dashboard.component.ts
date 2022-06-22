import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrearPublicacionComponent } from '../crear-publicacion/crear-publicacion.component';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  private authListenerSubs:Subscription;

  public username ?: string

  constructor( public dialog: MatDialog, private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    this.userIsAuthenticated = this.userService.getIsAuth();
    this.authListenerSubs = this.userService.getAuthStatusListener().
    subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;

    });
    this.userService.getUser().subscribe((user: User) => {
      this.username = user.username;
    });
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  openModal() {
    this.dialog.open(CrearPublicacionComponent).afterClosed().subscribe(x  => {
      window.location.reload();
    })
  }

  logout(){
    this.router.navigate(['login']);
  }

  opbutton(){
    var list = document.getElementsByClassName('cerrarsesion');
    list[0].classList.toggle('hide');
  }


}
