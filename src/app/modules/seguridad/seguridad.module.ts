import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EstadosComponent} from './estados/estados.component'
import {ObjetosComponent} from './objetos/objetos.component'
import {ParametrosComponent} from './parametros/parametros.component'
import {PermisosComponent} from './permisos/permisos.component'
import {PreguntasComponent} from './preguntas/preguntas.component';
import {RolesComponent} from './roles/roles.component'
import { MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {SeguridadRoutes} from './seguridad.routing';
import {MatIconModule} from '@angular/material/icon';
import {ModalEstadosComponent} from './estados/modal-estados/modal-estados.component'
import {ModalParametrosComponent} from './parametros/modal-parametros/modal-parametros.component'
import {ModalObjetosComponent} from './objetos/modal-objetos/modal-objetos.component'
import {ModalRolesComponent} from './roles/modal-roles/modal-roles.component'
import {ModalPreguntasComponent} from './preguntas/modal-preguntas/modal-preguntas.component'
import {ModalPermisosComponent} from './permisos/modal-permisos/modal-permisos.component'
import {BitacoraComponent} from './bitacora/bitacora.component'
import { PipesModule } from 'src/app/pipes/pipes.module';
import { BackupComponent } from './backup/backup.component';
@NgModule({
  imports: [
    CommonModule,
     SeguridadRoutes,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    PipesModule
  ],
  declarations: [EstadosComponent,ObjetosComponent,ParametrosComponent,PermisosComponent,PreguntasComponent,RolesComponent,ModalEstadosComponent,BitacoraComponent,
    ModalParametrosComponent,
    ModalObjetosComponent,
    ModalRolesComponent,
    ModalPreguntasComponent,
    ModalPermisosComponent,
    BackupComponent
  ]
})
export class SeguridadModule { }
