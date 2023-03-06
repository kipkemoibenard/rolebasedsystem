import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = "http://localhost:3000/users";



  GetAll() {
    return this.http.get(this.apiurl);

  }

  GetByCode(id: any) {
    return this.http.get(this.apiurl + '/',id);

  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }
  GetUserRole() {
    return sessionStorage.getItem('role') != null ? sessionStorage.getItem('role')?.toString() : '';
  }

  onLogin(obj:any):Observable<any>{
    return this.http.post(this.apiurl, obj);
  }

  getToken(){
    return localStorage.getItem('token')
  }

  setToken(){
    return localStorage.setItem('token', 'Jwt Token')
  }

  remoeveToken(){
    return localStorage.removeItem('token')
  }

  getTodo(id:number):Observable<Todo>{
    return this.http.get<Todo>(`this.apiurl/${id}`
    );
  }



}
