import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { routing } from './library.routing';




@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    routing
  ]
})
export class LibraryModule { }
