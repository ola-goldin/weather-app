import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityGridComponent } from './cities-panel/city-grid/city-grid.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cities' },
  { path: 'cities', loadChildren: ()=> import('./cities-panel/cities-panel.module').then(m => m.CitiesPanelModule)},
  { path: '**', loadChildren: ()=> import('./cities-panel/cities-panel.module').then(m => m.CitiesPanelModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
