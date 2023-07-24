import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { TabsComponent } from '../component/tabs/tabs.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [TabsComponent, HighlightDirective],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [TabsComponent, HighlightDirective, MaterialModuleModule]
})
export class SharedModule { }
