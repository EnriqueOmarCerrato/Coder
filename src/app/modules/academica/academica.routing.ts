import { Routes, RouterModule } from '@angular/router';
import { MatriculaComponent } from './matricula/matricula.component'
import { InformeAcademicoComponent } from './informe-academico/informe-academico.component'
import { RegistroSocialComponent} from './registro-social/registro-social.component'

const routes: Routes = [
  {
    path: 'matricula',
    component: MatriculaComponent
  },  
  {
    path: 'informe-academico',
    component: InformeAcademicoComponent
  },
  {
    path: 'registro-servicio-social',
    component: RegistroSocialComponent
  }
];

export const AcademicaRoutes = RouterModule.forChild(routes);
