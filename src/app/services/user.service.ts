
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'https://jsonplaceholder.typicode.com';
  private loginURL = "https://dummyjson.com";
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseURL}/users`)
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.loginURL}/auth/login`, user)
  }

  get isLogin() {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
