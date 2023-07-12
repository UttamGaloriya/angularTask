import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayFunctionComponent } from './component/array-function/array-function.component';
import { JsonTableComponent } from './component/array-function/json-table/json-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ViewDialogBoxComponent } from './component/view-dialog-box/view-dialog-box.component';
import { MaterialModuleModule } from './material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFunctionComponent,
    JsonTableComponent,
    ViewDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
