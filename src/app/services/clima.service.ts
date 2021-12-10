import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  private apiKey:string = "d91c0e0f9a86e06492f46c27fbba3f09";
  private servicioUrl:string  = "http://api.openweathermap.org/data/2.5";
  private urlNoticias:string = "https://newsdata.io/api/1"
  historial:string[] = [];
  resultado:any[] = [];
  noticias:any[] = [];

  constructor(private _http: HttpClient) { 
    if(localStorage.getItem('historial')) {
      this.historial = JSON.parse(localStorage.getItem('historial')!)
    }
  }

  buscarCiudad (ciudad:string = "") {

    ciudad = ciudad.trim().toLocaleLowerCase();

    if(!this.historial.includes(ciudad)){
      this.historial.unshift(ciudad);
      console.log(this.historial)
    }
    
  
    localStorage.setItem('historial', JSON.stringify(this.historial));

    const params = new HttpParams()
      .set('q', ciudad)
      .set('appid', this.apiKey)
      .set('units', "metric")
      .set('lang', "es")

    this._http.get(`${this.servicioUrl}/weather`, {params})
    .subscribe((data:any) => {
    this.resultado = []
    this.resultado.push(data)
    console.log(this.resultado)
  })

  const params2 = new HttpParams()
      .set('apikey', "pub_2631c7454aedaed6c6b653d351235a08b4cf")
      .set('q', ciudad)
      .set('language', "es")

  this._http.get(`${this.urlNoticias}/news`, {params: params2})
    .subscribe((data:any) => {
      //this.noticias.push(data.results)
      this.noticias = data.results
      console.log(this.noticias)
    })

  
  };

}
