import { Component, HostListener, OnInit,OnDestroy, ViewEncapsulation } from '@angular/core';
import { CustomizerService } from '../services/customizer.service';
import { NavService } from '../services/nav.service';
import * as feather from 'feather-icons';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TemplateComponent implements OnInit ,OnDestroy{
  public right_side_bar: boolean;
  user:string;

  ruta:any = '';
  ngOnDestroy(): void {
    this.ruta = ''
  }

  constructor(public navServices: NavService,
    public customizer: CustomizerService,public router: Router, private routerA: ActivatedRoute) {
      this.routerA.paramMap.subscribe(nomUser=>{
        this.user=nomUser.get('user');
      });
    }

  ngAfterViewInit(): void {
    if (localStorage){
      if(localStorage.getItem('login') == undefined){
        this.router.navigateByUrl("/login");
      }
    }
    setTimeout(() => {
      feather.replace();
    });
  }

  ngOnInit(): void {
    this.router.navigateByUrl("/dashboard/"+this.user+"/inicio/inicio");
  }



  @HostListener('document:click', ['$event'])
  clickedOutside(event) {
    // click outside Area perform following action
    document.getElementById('outer-container').onclick = function (e) {
      e.stopPropagation()
      if (e.target != document.getElementById('search-outer')) {
        document.getElementsByTagName("body")[0].classList.remove("offcanvas");
      }
      if (e.target != document.getElementById('outer-container')) {
        document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");

      }
      if (e.target != document.getElementById('inner-customizer')) {
        //   document.getElementsByClassName("customizer-links")[0].classList.remove("open")
        //   document.getElementsByClassName("customizer-contain")[0].classList.remove("open")
      }
    }
    ;
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public rightSidebar($event) {
    this.right_side_bar = $event
  }

}
