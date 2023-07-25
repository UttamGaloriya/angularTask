
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SnackBarService } from './snack-bar.service';
import { ProjectData } from '../shared/user-data';

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
  myNewId() {
    const projectData = localStorage.getItem(' projectData')
    if (projectData !== null) {
      let highId: number = -1;
      const list = JSON.parse(projectData)
      list.forEach((res: ProjectData) => {
        if (res.id > highId) {
          highId = res.id
        }
      });
      return highId + 1
    } else {
      return 1
    }

  }
  addUserData(data: ProjectData) {
    data.id = this.myNewId()
    const projectData = localStorage.getItem(' projectData')
    if (projectData !== null) {
      const userInfo = JSON.parse(projectData)
      userInfo.push(data)
      localStorage.setItem(' projectData', JSON.stringify(userInfo))
    } else {
      let userInfo = []
      data.id = this.myNewId()
      userInfo.push(data)
      localStorage.setItem(' projectData', JSON.stringify(userInfo))
    }

    this.snackbar.showSnackBar('Data added successfully', 'ok', 'success')
  }


}
