import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private API = 'http://localhost:4000/api';

  constructor(private http: HttpClient, private auth: AuthService) {}

  // Obtener todos los posts
  list(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API}/posts`);
  }

  // Crear post con token en encabezado
  create(data: any): Observable<any> {
    const token = this.auth.getToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    return this.http.post(`${this.API}/posts`, data, { headers });
  }
}
