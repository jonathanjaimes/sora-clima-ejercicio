import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>

  constructor(private ClimaService:ClimaService) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length === 0) {
      return;
    }
    console.log(valor)
    this.txtBuscar.nativeElement.value = "";
    
    this.ClimaService.buscarCiudad(valor)


  }

}
