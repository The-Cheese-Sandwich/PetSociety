import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
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
  constructor(private dialogRef: MatDialogRef<CrearPublicacionComponent>) { }

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
  

}
