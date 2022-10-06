import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CityGridComponent } from './city-grid/city-grid.component';
import { CityCardComponent } from './city-card/city-card.component';
import { CitiesPanelRoutingModule } from './cities-panel-routing.module';
import { SharedPngElementsModule } from '../@shared/shared-ui/shared-ui.module';
import { WeatherGridComponent } from '../weather-panel/weather-grid/weather-grid.component';
import { WeatherCardComponent } from '../weather-panel/weather-card/weather-card.component';



@NgModule({
  declarations: [
    WeatherCardComponent,
    WeatherGridComponent,
    CityCardComponent,
    CityGridComponent],
  imports: [
    CommonModule,
    CitiesPanelRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedPngElementsModule
  ]
})
export class CitiesPanelModule { }
