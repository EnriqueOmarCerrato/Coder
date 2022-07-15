import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DiagnosticoEvaluacionComponent} from './diagnostico-evaluacion/diagnostico-evaluacion.component'
import {MatCard, MatCardActions, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PsicologiaRoutes } from './psicologia.routing';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {DiagnosticoComponent} from './diagnostico-evaluacion/diagnostico/diagnostico.component'
import { SolicitudComponent } from './solicitud/solicitud.component';
import {ModalSolicitudComponent} from './solicitud/modal-solicitud/modal-solicitud.component'
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    PsicologiaRoutes,
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
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    PipesModule
  ],
  declarations: [DiagnosticoEvaluacionComponent,DiagnosticoComponent, SolicitudComponent,ModalSolicitudComponent] ,
   exports:[MatStepperModule]
    
})
export class PsicologiaModule { }
