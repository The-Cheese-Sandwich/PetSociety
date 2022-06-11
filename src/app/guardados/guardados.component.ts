import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardados',
  templateUrl: './guardados.component.html',
  styleUrls: ['./guardados.component.css']
})
export class GuardadosComponent implements OnInit {
  
  publicaciones?: Array<{}>

  constructor() { }

  ngOnInit(): void {
    this.publicaciones =[
      {
        userImg: "./assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "./assets/test_pet_img.jpg",
        descrp:  "Se perdio perro facherito de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 40
      },
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/gatito1.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      },
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/perro.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      },
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/gatito.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      }
    ]
  }

}
