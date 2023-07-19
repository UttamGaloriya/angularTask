import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingDetailsComponent } from './setting-details/setting-details.component';

const routes: Routes = [
  { path: '', component: SettingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
