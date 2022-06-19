import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../services/posts.service';
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
  titulo : string = "";
  descipcion : string = "";
  User_name = "NombreUser1";
  
  constructor(private dialogRef: MatDialogRef<CrearPublicacionComponent> , private postService : PostsService) { }

  ngOnInit(): void {
    
  }
  close(){
    this.dialogRef.close();
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);
    });
    reader.readAsDataURL(file);
  }
  publicar(){
    if(this.titulo == "" || this.descipcion == "" || this.selectedFile == undefined){
      alert("Debes llenar todos los datos.");
    }
    else{
      this.postService.addPost(this.titulo, this.descipcion , this.selectedFile.file);
      alert("Se guardo.");
      this.dialogRef.close();
    }

  }
  

}
