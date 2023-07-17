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
import { FirstComponent } from './routing/first/first.component';
import { SecondComponent } from './routing/second/second.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { NavbarComponent } from './routing/navbar/navbar.component';
import { TopComponent } from './routing/top/top.component';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './component/list/list.component';
import { SectionComponent } from './component/section/section.component';
import { ConfirmComponent } from './component/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayFunctionComponent,
    JsonTableComponent,
    ViewDialogBoxComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponentComponent,
    NavbarComponent,
    TopComponent,
    LifeCycleComponent,
    ListComponent,
    SectionComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
