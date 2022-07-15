import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user:string;

  constructor(private routerA: ActivatedRoute) {
    this.routerA.paramMap.subscribe(nomUser=>{
      this.user=nomUser.get('user');
    });
  }

  ngOnInit() {
  }

}
