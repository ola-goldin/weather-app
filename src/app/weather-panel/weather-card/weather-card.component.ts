import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/interfaces/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
@Input()day: Weather | null= null;
iconSrc: string  = '' ;
  constructor() { }

  ngOnInit(): void {
    this.iconSrc=`http://openweathermap.org/img/wn/${this.day?.icon}.png`;
  }

}
