import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }
