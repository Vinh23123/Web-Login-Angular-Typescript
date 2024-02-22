import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';

const API_URL_1 = 'http://localhost:8092/api/test/';

const API_URL_2 = 'http://localhost:8092/api/v1/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private baseURL = 'http://localhost:8092/api/v1/users';

  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL_1 + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL_1 + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL_1 + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL_1 + 'admin', { responseType: 'text' });
  }

  // ****************************************************************
  getUserList(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL_2}`);
  }

  // getUserList(): Observable<User[]> {
  //   return this.http.get<User[]>(API_URL_2 + 'admin');
  // }

  // createUser(user: User): Observable<Object> {
  //   return this.http.post(`${this.baseURL}`, user);
  // }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL_2}/${id}`);
  }

  updateUser(id: number, user: User): Observable<Object> {
    return this.http.put<object>(`${API_URL_2}/${id}`, user);
  }
  deleteUser(id: number): Observable<Object> {
    return this.http.delete(`${API_URL_2}/${id}`);
  }
}
