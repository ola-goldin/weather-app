import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {DynamicDialogModule} from 'primeng/dynamicdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    AutoCompleteModule,
    DynamicDialogModule,
    
  ],
  exports:[CommonModule,
    CardModule,
    ButtonModule,
    AutoCompleteModule,
    DynamicDialogModule]
})
export class SharedPngElementsModule { }
