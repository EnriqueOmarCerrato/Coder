import { Routes, RouterModule } from '@angular/router';
import {EstadosComponent} from './estados/estados.component'
import {ObjetosComponent} from './objetos/objetos.component'
import {ParametrosComponent} from './parametros/parametros.component'
import {PermisosComponent} from './permisos/permisos.component'
import {PreguntasComponent} from './preguntas/preguntas.component';
import {RolesComponent} from './roles/roles.component'
import {BitacoraComponent} from './bitacora/bitacora.component'
import { BackupComponent } from './backup/backup.component';

const routes: Routes = [
  {
    path:'estados',
    component:EstadosComponent
   },
   {
    path:'objetos',
    component:ObjetosComponent
   },
   {
    path:'parametros',
    component:ParametrosComponent
   },
   {
    path:'permisos',
    component:PermisosComponent
   },
   {
    path:'preguntas',
    component:PreguntasComponent
   },
   {
    path:'roles',
    component:RolesComponent
   },
   {
    path:'bitacora',
    component:BitacoraComponent
   },
   {
    path:'Backup_Restor',
    component: BackupComponent
   },

];

export const SeguridadRoutes = RouterModule.forChild(routes);
