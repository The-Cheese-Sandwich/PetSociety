import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(["/"]);

  }

  changeState(id : string){
    var list = document.getElementsByClassName('selected');
    if(list.length > 0) {      
      list[0].classList.toggle('deselect');
      list[0].classList.toggle('selected');
    } 
    document.getElementById(id)?.classList.toggle('deselect'); 
    document.getElementById(id)?.classList.toggle('selected');
  }

}
