import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones-general',
  templateUrl: './publicaciones-general.component.html',
  styleUrls: ['./publicaciones-general.component.css']
})
export class PublicacionesGeneralComponent implements OnInit {

  publicaciones?: Array<{}>

  constructor() { }

  ngOnInit(): void {

    this.publicaciones =[
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/test_pet_img.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      },
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/test_pet_img.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      },
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/test_pet_img.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      },
      {
        userImg: "/assets/imegen-perfil-defult.png",
        username: "Huellitas_adopciones",
        pubImg: "/assets/test_pet_img.jpg",
        descrp:  "Se perdio perro fachero de solo 6 meses. Responde por el nombre facha , se lo vio por ultima vez en la calle 18 de calacoto. Es de la raza husky , favor contactar con el numero 74401923",
        numComm: 50
      }
    ]

  }

}
