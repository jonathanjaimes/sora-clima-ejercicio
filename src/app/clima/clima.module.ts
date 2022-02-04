import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClimaPrincipalComponent } from './clima-principal/clima-principal.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ClimaPrincipalComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ClimaPrincipalComponent
  ]
})
export class ClimaModule { }
