import { Component, OnInit } from '@angular/core';
import { forkJoin, map } from 'rxjs';
import { City, localeOptions } from 'src/app/interfaces/city';
import { DataService } from 'src/app/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-city-grid',
  templateUrl: './city-grid.component.html',
  styleUrls: ['./city-grid.component.scss']
})
export class CityGridComponent implements OnInit {

  constructor(private readonly searchService: DataService) { }
  text: string = '';
  cities: City[] = [];
  results: string[] = [];

  ngOnInit(): void {
    this.search();
  }

  search(event?: any) {
    this.searchService.getData(environment.cities, event?.query ?? this.text).pipe(map(res =>
      forkJoin(res._embedded['city:search-results'].map((item: any) =>
        this.searchService.getData(item._links['city:item'].href)))
        .pipe(map((cities: any) => cities.map((x: any) => { return {full_name:x.full_name, name: x.name, longitude: this.toFixed(x.location.latlon.longitude), latitude: this.toFixed(x.location.latlon.latitude), time: this.getCityTime(x._links['city:timezone'].name) } }))).subscribe((x: City[]) => {
          this.cities = x;
          this.results = this.cities.map(x => x.full_name);
        })
    )).subscribe()
  }

  private toFixed(number: string) {
   return number.toString().slice(0, (number.toString().indexOf(".")) + 3)
  }

  private getCityTime(timeZone: string) {
    const offset = this.getTimezoneOffset(timeZone);
    return this.computeTime(offset);
  }

  private computeTime(offsetUTC: number) {
    const current_date = new Date();
    const utc_time = current_date.getTime() + (current_date.getTimezoneOffset() * 60000);
    const new_date_instance = new Date(utc_time + offsetUTC);
    return new_date_instance.toLocaleString("en", localeOptions);

  }

  private getTimezoneOffset = (timeZone: string, date = new Date()) => {
    const tz = date.toLocaleString("en", { timeZone, timeStyle: "long" }).split(" ").slice(-1)[0];
    const dateString = date.toString();
    const offset = Date.parse(`${dateString} UTC`) - Date.parse(`${dateString} ${tz}`);

    return offset;
  }

}
