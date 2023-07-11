import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayFunctionComponent } from './component/array-function/array-function.component';
import { JsonTableComponent } from './component/array-function/json-table/json-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatmodualsModule } from './matmoduals/matmoduals.module';
import { ViewDailogBoxComponent } from './component/view-dailog-box/view-dailog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFunctionComponent,
    JsonTableComponent,
    ViewDailogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatmodualsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
