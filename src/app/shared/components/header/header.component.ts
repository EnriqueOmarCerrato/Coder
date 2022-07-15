
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService, Menu } from '../../../services/nav.service';
import { DataTabsService } from '../../../services/data-tabs.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from "@angular/router";

var body = document.getElementsByTagName("body")[0];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public menuItems: Menu[];
  public items: Menu[];
  public openNav: boolean = false
  public right_sidebar: boolean = false
  public text: string

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public dataTabsService:DataTabsService,public navServices: NavService,public SidebarComponent:SidebarComponent, public router: Router) {  }

  public $titleHeader="";

  ngOnInit() {
    this.dataTabsService.getTabActivoObs().subscribe(tab => {
      this.$titleHeader=tab;
    });
  }

  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }

  cerrarSesion(){
    localStorage.removeItem('login');
    this.router.navigateByUrl("/login");
  }

}
