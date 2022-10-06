import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityGridComponent } from './city-grid/city-grid.component';

const routes: Routes = [
  {
    path: '',
    component: CityGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesPanelRoutingModule { }