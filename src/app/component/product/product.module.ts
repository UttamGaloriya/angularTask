import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModuleModule
  ]
})
export class ProductModule { }
