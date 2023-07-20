import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DataComponent } from './data/data.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialLearnComponent } from './material-learn/material-learn.component';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataComponent,
    MaterialLearnComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModuleModule,
    ReactiveFormsModule

  ]
})
export class HomeModule { }
