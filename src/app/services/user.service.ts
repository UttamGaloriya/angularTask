
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface userObj {
  name: string;
  username: string;
}
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

  updateUser(user: userObj, id: number): Observable<any> {
    return this.http.put(`${this.baseURL}/users/${id}`, user)
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/${id}`)
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.loginURL}/auth/login`, user)
  }

  get isLogin() {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
