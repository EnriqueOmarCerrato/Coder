import { HttpClient } from '@angular/common/http';
import { Injectable, HostListener } from '@angular/core';

// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	id?:number;
	children?: Menu[];
}

export interface InfoMenu {
	parentMenu:string;
	childMenu:string;
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false
    permisos:any[] = [];
	 MENUITEMS:Menu[] = [];
  	prueba:boolean = false;
    items:any;

	constructor(private http:HttpClient) {
    this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}



// Windows width
@HostListener('window:resize', ['$event'])
onResize(event?) {
  this.screenWidth = window.innerWidth;
}

}
