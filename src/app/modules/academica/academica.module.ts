import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from 'src/app/pipes/pipes.module';
import {AcademicaRoutes} from './academica.routing'
import {MatriculaComponent} from './matricula/matricula.component'
import {ModalMatriculaComponent} from './matricula/modal-matricula/modal-matricula.component'
import {InformeAcademicoComponent} from './informe-academico/informe-academico.component'
import {ModalInformeComponent} from './informe-academico/modal-informe/modal-informe.component'
import {RegistroSocialComponent} from './registro-social/registro-social.component'
import {ModalRegistroComponent} from './registro-social/modal-registro/modal-registro.component'

import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectFilterModule } from 'mat-select-filter';



@NgModule({
  imports: [
    CommonModule,
    AcademicaRoutes,
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
    PipesModule,
    MatStepperModule,
    MatSelectFilterModule,
    
  ],
  declarations: [MatriculaComponent,ModalMatriculaComponent,InformeAcademicoComponent,ModalInformeComponent,RegistroSocialComponent,ModalRegistroComponent]
})
export class AcademicaModule { }
