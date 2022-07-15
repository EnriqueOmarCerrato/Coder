import { Component } from '@angular/core';
import { Router, NavigationEnd , ActivatedRoute } from '@angular/router';
import { BehaviorSubject, config } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
export interface InfoMenu {
  parentMenu:string;
  childMenu:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'endless-starterkit';
}
