import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routing } from './administracion.route';
import { SharedModule } from '../../shared/shared.module';
import { NivelAcademicoComponent } from './nivel-academico/nivel-academico.component';
import { NacionalidadComponent } from './nacionalidad/nacionalidad.component';
import { SedesComponent } from './sedes/sedes.component';
import { ParentescoComponent } from './parentesco/parentesco.component';
import { ServiciosSocialesComponent } from './servicios-sociales/servicios-sociales.component';
import { GeneroComponent } from './genero/genero.component';
import { TipoPersonaComponent } from './tipo-persona/tipo-persona.component';
import { TipoInclusionComponent } from './tipo-inclusion/tipo-inclusion.component';
import { TipoEvaluacionComponent } from './tipo-evaluacion/tipo-evaluacion.component';
import { TipoEspecialidadComponent } from './tipo-especialidad/tipo-especialidad.component';
import { ModalidadServicioComponent } from './modalidad-servicio/modalidad-servicio.component';
import { ModalidadAtencionComponent } from './modalidad-atencion/modalidad-atencion.component';
import {MatCard, MatCardActions, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './nivel-academico/modal/modal.component';
import {ModalNacionalidadComponent} from './nacionalidad/modal-nacionalidad/modal-nacionalidad.component';
import {ModalTipoEvacuacionComponent} from './tipo-evaluacion/modal-tipo-evacuacion/modal-tipo-evacuacion.component'
import {FILTERPipe} from '../../pipes/FILTER.pipe';
import { ModalSedeComponent } from './sedes/modal-sede/modal-sede.component';
import { ModalTipoPersonaComponent } from './tipo-persona/modal-tipo-persona/modal-tipo-persona.component';
import {ModalGeneroComponent} from './genero/modal-genero/modal-genero.component';
import {ModalParentescoComponent} from './parentesco/modal-parentesco/modal-parentesco.component'
import {ModalServicioComponent} from './modalidad-servicio/modal-servicio/modal-servicio.component'
import {ModalAtencionComponent} from './modalidad-atencion/modal-atencion/modal-atencion.component';
import {ModalEspecialidadComponent} from './tipo-especialidad/modal-especialidad/modal-especialidad.component';
import {ModalTipoInclusionComponent} from './tipo-inclusion/modal-tipo-inclusion/modal-tipo-inclusion.component'
import { MatStepperModule} from '@angular/material/stepper';
import {PipesModule} from '../../pipes/pipes.module'
import {ModalServiciooComponent} from './servicios-sociales/modal-servicio/modal-servicio.component'
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [NivelAcademicoComponent, NacionalidadComponent, SedesComponent, ParentescoComponent, ServiciosSocialesComponent, 
    GeneroComponent, TipoPersonaComponent, TipoInclusionComponent, TipoEvaluacionComponent, TipoEspecialidadComponent,
     ModalidadServicioComponent, ModalidadAtencionComponent, ModalComponent,NacionalidadComponent,ModalNacionalidadComponent,ModalSedeComponent,
    ModalTipoPersonaComponent,ModalTipoEvacuacionComponent,ModalGeneroComponent,ModalParentescoComponent,ModalServicioComponent,ModalAtencionComponent,ModalEspecialidadComponent
    ,ModalTipoInclusionComponent,ModalServiciooComponent

    ],
  imports: [
    routing,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule
    ,MatInputModule,
    MatIconModule,
    MatStepperModule,
    PipesModule,
    MatSelectModule,
  
 
  ],
  exports:[
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
 
  ]
})
export class AdministracionModule { }
