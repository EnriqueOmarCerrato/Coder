import { Routes, RouterModule } from '@angular/router';
import {SolicitudComponent} from './solicitud/solicitud.component'
import {DiagnosticoEvaluacionComponent} from './diagnostico-evaluacion/diagnostico-evaluacion.component'
const routes: Routes = [
  { 
    path:"solicitud-evaluacion",
    component: SolicitudComponent
   },
   {
     path:'diagnostico-evaluacion',
     component:DiagnosticoEvaluacionComponent
   }
];

export const PsicologiaRoutes = RouterModule.forChild(routes);
