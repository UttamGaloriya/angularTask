
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SnackBarService } from './snack-bar.service';

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
  constructor(private http: HttpClient, private snackbar: SnackBarService) { }

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


  signup(user: any): Observable<any> {
    return this.http.post(`${this.loginURL}/users/add`, user)
  }

  get isLogin() {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  addUserData(product: any) {

    const userData = localStorage.getItem('userData')
    if (userData !== null) {
      const userInfo = JSON.parse(userData)
      userInfo.push(product)
      localStorage.setItem('userData', JSON.stringify(userInfo))
    } else {
      let userInfo = []
      userInfo.push(product)
      console.log("cart products", product);
      localStorage.setItem('userData', JSON.stringify(userInfo))
    }

    this.snackbar.showSnackBar('Data added successfully', 'ok', 'success')
  }


}
