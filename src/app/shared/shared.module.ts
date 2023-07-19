import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { TabsComponent } from '../component/tabs/tabs.component';



@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [TabsComponent]
})
export class SharedModule { }
