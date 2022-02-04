import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialComponent } from './historial/historial.component';



@NgModule({
  declarations: [
    HistorialComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistorialComponent
  ]
})
export class SharedModule { }
