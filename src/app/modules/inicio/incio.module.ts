import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InicioComponent} from './inicio/inicio.component';
import {InicioRoutes} from './inicio.routing'
@NgModule({
  imports: [
    CommonModule,
    InicioRoutes
  ],
  declarations: [InicioComponent]
})
export class IncioModule { }
