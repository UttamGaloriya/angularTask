import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModuleModule } from 'src/app/material-module/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
