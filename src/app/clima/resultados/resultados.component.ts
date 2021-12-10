import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../../services/clima.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent{

  constructor(private ClimaService:ClimaService) { }

  get resultado () {
    return this.ClimaService.resultado;
  }


  get noticias () {
    return this.ClimaService.noticias;
  }

  

}
