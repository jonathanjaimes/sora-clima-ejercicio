import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {

  constructor(private ClimaService:ClimaService) { }


  get historial () {
    return this.ClimaService.historial;
  }

  buscar(dato:any) {
    this.ClimaService.buscarCiudad(dato);
  }

}
