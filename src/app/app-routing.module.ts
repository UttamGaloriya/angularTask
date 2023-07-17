import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonTableComponent } from './component/array-function/json-table/json-table.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { YourGuardGuard } from './services/your-guard.guard';
import { TableResolver } from './services/table.resolver';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { ListComponent } from './component/list/list.component';

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
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
