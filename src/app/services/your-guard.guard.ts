import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class YourGuardGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private userServices: UserService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('access-token')
    if (token != null) {
      return true
    }
    this.router.navigateByUrl('/account/login')
    return false;
  }
  //can activate child method for lazy loading of modules in Angular
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let token = localStorage.getItem('access-token')
    if (token == null) {
      return true
    }
    this.router.navigateByUrl('/table')
    return false;
  }
}
