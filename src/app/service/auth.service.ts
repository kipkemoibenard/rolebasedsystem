import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

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

}
