import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MeteoInfosComponent } from "./meteo-infos/meteo-infos.component"; // Import du module
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, MeteoInfosComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'weatherAPI';
  
}
