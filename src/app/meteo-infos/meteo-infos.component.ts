import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meteo-infos',
  imports: [CommonModule],
  templateUrl: './meteo-infos.component.html',
  styleUrl: './meteo-infos.component.scss'
})
export class MeteoInfosComponent {

  cityInfos:any = {
    location:{
      name: ""
    },
    current:{
      temp_c: ""
    }
  };
  
  cityName:string="Paris";
  errorStatus:boolean= false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeatherInfos("Paris");
  }

  onChange(event:any){
    this.cityName = event.target?.value;
  }

  public async getWeatherInfos (cityName:string) {
    const url = "https://api.weatherapi.com/v1/current.json?key=2a96fbe4f1434662b9e94451251501&q="+cityName+"&aqi=no";

    this.http.get(url).subscribe(
      (response) => {
        console.log('Weather data:', response);
        this.cityInfos = response; // Stocker la réponse dans cityInfos
        this.errorStatus = false;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données météo:', error);
        this.errorStatus = true;
      }
    );
  }

}
