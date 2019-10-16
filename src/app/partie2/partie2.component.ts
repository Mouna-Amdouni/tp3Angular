import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie2',
  templateUrl: './partie2.component.html',
  styleUrls: ['./partie2.component.css']
})
export class Partie2Component implements OnInit {
  tab=[15,46,0,89,80];

 onPosition(indice){

console.log(indice);


  }

  constructor() { }

  ngOnInit() {
  }

}
