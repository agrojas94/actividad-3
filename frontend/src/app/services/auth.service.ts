
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API = 'http://localhost:4000/api';
  constructor(private http: HttpClient){}
  register(data:any): Observable<any>{ return this.http.post(`${this.API}/auth/register`, data); }
  login(data:any): Observable<any>{ return this.http.post(`${this.API}/auth/login`, data); }
  saveToken(token:string){ localStorage.setItem('token', token); }
  getToken(){ return localStorage.getItem('token'); }
  isLoggedIn(){ return !!this.getToken(); }
  logout(){ localStorage.removeItem('token'); }
}
