import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FILTERPipe} from './FILTER.pipe'

@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
  FILTERPipe
  ],
  declarations: [FILTERPipe]
})

export class PipesModule { }
