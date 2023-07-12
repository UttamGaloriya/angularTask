import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonTableComponent } from './component/array-function/json-table/json-table.component';
import { FirstComponent } from './routing/first/first.component';
import { SecondComponent } from './routing/second/second.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { YourGuardGuard } from './services/your-guard.guard';
import { TopComponent } from './routing/top/top.component';
import { NewsResolver } from './routing/news.resolver';

const routes: Routes = [
  { path: 'table', component: JsonTableComponent, canActivate: [YourGuardGuard] },
  { path: 'first', component: FirstComponent, canActivate: [YourGuardGuard] },
  { path: 'second', component: SecondComponent, canActivate: [YourGuardGuard] },
  { path: 'lazy', loadChildren: () => import('./routing/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule), canLoad: [YourGuardGuard] },
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  {
    path: 'top',
    component: TopComponent,
    resolve: { message: NewsResolver }
  },
  { path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
