import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  @Input() userImg?: string;
  @Input() username?: string;
  @Input() pubImg?: string;
  @Input() descrp?: string;
  @Input() numComm?: string;


  constructor() { }

  ngOnInit(): void {
  }

}
