import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
   },
];

//export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);

export const InicioRoutes = RouterModule.forChild(routes);
