import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { routing } from './template.routing';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    routing,
    SharedModule
  ]
})
export class TemplateModule {}
