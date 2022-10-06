import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { City, localeOptions } from 'src/app/interfaces/city';
import { Weather } from 'src/app/interfaces/weather';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-grid',
  templateUrl: './weather-grid.component.html',
  styleUrls: ['./weather-grid.component.scss']
})
export class WeatherGridComponent implements OnInit {
  city: City | null = null;
  weatherlist: Weather[] = []

  ngOnInit(): void {
    this.city = this.config.data.city;
    this.showForecast();
  }

  constructor(private readonly dataService: DataService, public config: DynamicDialogConfig) { }

  showForecast() {
    const url = `${environment.forecats}?lat=${this.city?.latitude}&lon=${this.city?.longitude}&appid=${environment.apiKey}`;
    this.dataService.getData(url).subscribe(res => {
      this.weatherlist = res.list.slice(0, 8).map((x: any) => {
        return { time: this.dateFormat(x.dt_txt), weather: x.weather[0].main, icon: x.weather[0].icon, temperature: Number(x.main.temp / 10).toFixed(0) }
      })
    })
  }

  private dateFormat(date: string) {
    const mydate = new Date(date);
    return mydate.toLocaleDateString('en', localeOptions);
  }

}
