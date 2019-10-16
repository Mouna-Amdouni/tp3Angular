import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp',
  templateUrl: './tp.component.html',
  styleUrls: ['./tp.component.css']
})
export class TpComponent implements OnInit {
  tab=[15,23,16,18,20];


  onposition(indice){

console.log(indice);


  }

profils=["Admin","User","Visitor"];
profil="Visitor";

  constructor() { }

  ngOnInit() {
  }

}
