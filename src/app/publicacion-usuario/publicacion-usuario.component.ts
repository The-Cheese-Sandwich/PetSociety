import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publicacion-usuario',
  templateUrl: './publicacion-usuario.component.html',
  styleUrls: ['./publicacion-usuario.component.css']
})
export class PublicacionUsuarioComponent implements OnInit {
  
  @Input() publicacion?: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
