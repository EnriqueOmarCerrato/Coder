import { Routes, RouterModule } from '@angular/router';
import {ColaboradoresComponent} from './colaboradores/colaboradores.component'
import {DepartamentoLaboralComponent} from './departamento-laboral/departamento-laboral.component';
const routes: Routes = [
  { 
    path:'colaborador',
    component:ColaboradoresComponent
   },
   {
     path:'depto-laboral',
     component:DepartamentoLaboralComponent
   }
];

export const ColaboraderesRoutes = RouterModule.forChild(routes);
