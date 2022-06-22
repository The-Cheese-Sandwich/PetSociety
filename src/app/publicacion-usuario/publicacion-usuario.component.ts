import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPublicacionComponent } from '../crear-publicacion/crear-publicacion.component';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-publicacion-usuario',
  templateUrl: './publicacion-usuario.component.html',
  styleUrls: ['./publicacion-usuario.component.css']
})
export class PublicacionUsuarioComponent implements OnInit {

  @Input() publicacion?: Post;
  constructor( public dialog: MatDialog, private postService : PostsService) { }

  ngOnInit(): void {
  }
  
  updatePub(){
    this.dialog.open(CrearPublicacionComponent, {
      data: this.publicacion
    });
  }

  deletePub(){
    if (confirm("¿Estás seguro que deseas borrar esta publicación?") == true) {
      this.postService.deletePost(this.publicacion.id);
    }
    
  }
  

}
