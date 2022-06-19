import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CrearPublicacionComponent } from '../crear-publicacion/crear-publicacion.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor( public dialog: MatDialog,) {}

  ngOnInit(): void {
  }
  openModal() {
    const dialogRef = this.dialog.open(CrearPublicacionComponent);

  }


}
