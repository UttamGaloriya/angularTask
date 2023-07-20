
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
  private firebaseApiKey = "AIzaSyBd2qrxKb-n2ZFfo1HiwtF96SBwyhaDrEw"
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

  // login(user: any): Observable<any> {
  //   return this.http.post(`${this.loginURL}/auth/login`, user)
  // }

  login(user: any): Observable<any> {
    const signInEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.firebaseApiKey}`;
    const signInData = {
      email: user.username,
      password: user.password,
      returnSecureToken: true
    };
    return this.http.post(signInEndpoint, signInData)
  }

  signup(user: any): Observable<any> {
    return this.http.post(`${this.loginURL}/users/add`, user)
  }

  get isLogin() {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
}
