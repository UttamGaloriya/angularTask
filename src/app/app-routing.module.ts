import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonTableComponent } from './component/array-function/json-table/json-table.component';
import { FirstComponent } from './routing/first/first.component';
import { SecondComponent } from './routing/second/second.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { YourGuardGuard } from './services/your-guard.guard';
import { TopComponent } from './routing/top/top.component';
import { NewsResolver } from './routing/news.resolver';
import { TableResolver } from './services/table.resolver';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';

const routes: Routes = [
  {
    path: 'account', loadChildren: () => import('./component/account/account.module').then(m => m.AccountModule)
    , canLoad: [YourGuardGuard]
  },
  {
    path: 'table',
    component: JsonTableComponent,
    resolve: { data: TableResolver },
    canActivate: [YourGuardGuard]
  },
  { path: 'life-cycle', component: LifeCycleComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
