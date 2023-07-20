import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { MaterialLearnComponent } from './material-learn/material-learn.component';

const routes: Routes = [
  { path: '', component: DataComponent },
  { path: 'material', component: MaterialLearnComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
