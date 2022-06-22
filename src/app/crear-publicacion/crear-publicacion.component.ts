import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})

export class CrearPublicacionComponent implements OnInit {
  selectedFile: ImageSnippet | undefined;
  //titulo : string = "";
  descipcion : string = "";
  User_name = "NombreUser1";
  public post: Post;
  public urlImg: string;
  
  constructor(private userService: UsersService , private dialogRef: MatDialogRef<CrearPublicacionComponent> , 
    private postService : PostsService , @Optional() @Inject(MAT_DIALOG_DATA) public data: Post, private router: Router) {
   if(data !=null)
    this.post = {...data};
  }

  ngOnInit(): void {
    this.llenarIfEdit();
    this.userService.getUser().subscribe((user: User) => {
      this.User_name =user.username;
    });
  }
  llenarIfEdit(){
    if(this.post != undefined){
      this.urlImg = this.post.image;
      this.descipcion = this.post.description;
    }
  }
  close(){
    this.dialogRef.close();
  }
  processFile(imageInput: any) {
    this.urlImg = undefined;
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
    
      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
  }
  publicar(){
    if(this.descipcion == "" || this.selectedFile == undefined){
      alert("Debes llenar todos los datos.");
    }
    else{
      this.postService.addPost(this.User_name, this.descipcion , this.selectedFile.file);
      alert("Tu publicación se subió correctamente.");
      this.dialogRef.afterClosed().subscribe(x  => {
        window.location.reload();
      })
      this.dialogRef.close();
    }

  }
  editar(){
    if(this.descipcion == "" ){
      alert("Debes llenar todos los datos.");
    }
    else{
      if(this.urlImg != undefined)
        this.postService.updatePost(this.post.id , this.User_name, this.descipcion , this.urlImg);
      else
        this.postService.updatePost(this.post.id , this.User_name, this.descipcion , this.selectedFile.file);
      alert("Se actualizó la publicación.");
      this.dialogRef.close();
    }

  }
  

}
