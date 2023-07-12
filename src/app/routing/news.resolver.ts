import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { NewsService } from '../services/news.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Observable<string>> {
  constructor(private newsService: NewsService, private user: UserService) { }

  resolve(): Observable<any> {
    return this.user.getUserList();
  }

}