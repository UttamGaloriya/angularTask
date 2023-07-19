import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DataComponent } from './data/data.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DataComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
