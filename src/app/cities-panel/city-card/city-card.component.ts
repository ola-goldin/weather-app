import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { City } from 'src/app/interfaces/city';
import { Weather } from 'src/app/interfaces/weather';
import { WeatherGridComponent } from 'src/app/weather-panel/weather-grid/weather-grid.component';


@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  providers: [DialogService]
})
export class CityCardComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  @Input() city: City | null = null;
  ref?: DynamicDialogRef;
  weatherlist: Weather[] = [];
  cliantWidth: number = 0;
  gridWidth: string = ''

  ngOnInit(): void { this.cliantWidth = window.innerWidth;  this.gridWidth = this.cliantWidth < 600 ? '100%:' : '40%'; }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.cliantWidth = event.target.innerWidth;
    this.gridWidth = this.cliantWidth < 600 ? '100%:' : '40%';
  }

  showDialog() {
    this.ref = this.dialogService.open(WeatherGridComponent, {
      header: `${this.city?.name} Weather Forecast`,
      width:  this.gridWidth ,
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000,
      data: {
        city: this.city
      },
    });

  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
