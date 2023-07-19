import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsonTableComponent } from './component/array-function/json-table/json-table.component';
import { PageNotFoundComponentComponent } from './component/page-not-found-component/page-not-found-component.component';
import { YourGuardGuard } from './services/your-guard.guard';
import { TableResolver } from './services/table.resolver';
import { LifeCycleComponent } from './component/life-cycle/life-cycle.component';
import { ListComponent } from './component/list/list.component';
import { GuardGuard } from './services/guard.guard';
const routes: Routes = [
  {
    path: 'account', loadChildren: () => import('./component/account/account.module').then(m => m.AccountModule)
    , canLoad: [YourGuardGuard]
  },
  { path: 'home', loadChildren: () => import('./component/home/home.module').then(m => m.HomeModule), canLoad: [GuardGuard] },
  { path: 'customer', loadChildren: () => import('./component/customers/customers.module').then(m => m.CustomersModule), canLoad: [GuardGuard] },
  { path: 'product', loadChildren: () => import('./component/product/product.module').then(m => m.ProductModule), canLoad: [GuardGuard] },
  { path: 'setting', loadChildren: () => import('./component/settings/settings.module').then(m => m.SettingsModule), canLoad: [GuardGuard] },
  { path: 'user', loadChildren: () => import('./component/users/users.module').then(m => m.UsersModule), canLoad: [GuardGuard] },
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
