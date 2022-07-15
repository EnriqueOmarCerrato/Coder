import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  constructor(private SidebarComponent:SidebarComponent) {}

  infoMenu = {childMenu:"",parentMenu:""};
  $value=this.SidebarComponent.InfoMenu;

  ngOnInit() {
  }

  ngOnDestroy() {  }

}
