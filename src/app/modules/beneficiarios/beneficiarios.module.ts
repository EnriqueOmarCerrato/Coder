import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { routing } from './beneficiarios.route';
import { SharedModule } from '../../shared/shared.module';
import {BeneficiarioComponent} from './beneficiario/beneficiario.component';
import {MatCard, MatCardActions, MatCardContent, MatCardModule, MatCardTitle} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule} from '@angular/material/stepper';
import {ModalBeneficiarioComponent} from './beneficiario/modal-beneficiario/modal-beneficiario.component'
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { FILTERPipe } from 'src/app/pipes/FILTER.pipe';
import {PipesModule} from '../../pipes/pipes.module';
import { MatSelectFilterModule } from 'mat-select-filter';
@NgModule({
  declarations: [BeneficiarioComponent,ModalBeneficiarioComponent],
  imports: [
    routing,
    CommonModule,
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
    MatDatepickerModule,
    MatNativeDateModule,
    PipesModule,
    MatSelectFilterModule
  ],
  exports:[
    MatStepperModule,
    
  ]
})
export class BeneficiariosModule { }
