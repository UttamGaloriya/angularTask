import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyPageFirstComponent } from './lazy-page-first/lazy-page-first.component';
import { LazyPageTwoComponent } from './lazy-page-two/lazy-page-two.component';

const routes: Routes = [{
  path: '', component: LazyPageFirstComponent, children: [
    { path: 'second', component: LazyPageTwoComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
