import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ReturnTdsPipe } from '../pipes/return-tds.pipe';
// services
import { NavService } from "./../services/nav.service";
// Directives
import { ToggleFullscreenDirective } from "./directives/fullscreen.directive";
import { LoadingComponent } from './loading/loading.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { FILTERPipe } from '../pipes/FILTER.pipe';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FeatherIconsComponent,
    BreadcrumbComponent,
    ToggleFullscreenDirective,
    LoadingComponent,
    TableDataComponent,
    ReturnTdsPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FeatherIconsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BreadcrumbComponent,
    TableDataComponent,
    LoadingComponent
  ],
  providers: [
    NavService,
    SidebarComponent,
    BreadcrumbComponent,
    ReturnTdsPipe,

  ]
})
export class SharedModule { }

