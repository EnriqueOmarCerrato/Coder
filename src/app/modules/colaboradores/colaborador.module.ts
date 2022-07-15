import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import {ColaboraderesRoutes} from './colaboraderes.routing'
import {DepartamentoLaboralComponent} from './departamento-laboral/departamento-laboral.component'
import {ModalDepartamentoComponent} from './departamento-laboral/modal-departamento/modal-departamento.component'
import {MatCard, MatCardActions, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalColaboradorComponent } from './colaboradores/modal-colaborador/modal-colaborador.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ColaboraderesRoutes,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatStepperModule,
    MatSelectModule,
    PipesModule
  
  ],
  declarations: [ColaboradoresComponent,ModalColaboradorComponent,DepartamentoLaboralComponent,ModalDepartamentoComponent],
  providers:[
    MatDatepickerModule
  ]
})
export class ColaboradorModule { }
