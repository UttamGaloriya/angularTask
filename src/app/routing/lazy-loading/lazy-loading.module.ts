import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyPageFirstComponent } from './lazy-page-first/lazy-page-first.component';
import { LazyPageTwoComponent } from './lazy-page-two/lazy-page-two.component';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';


@NgModule({
  declarations: [
    LazyPageFirstComponent,
    LazyPageTwoComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    MaterialModuleModule
  ]
})
export class LazyLoadingModule { }
