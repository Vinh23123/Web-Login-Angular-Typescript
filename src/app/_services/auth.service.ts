import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const AUTH_API = "http://localhost:8092/api/auth/";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + "signin",
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + "signup",
      {
        username,
        email,
        firstname,
        lastname,
        password,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + "signout", {}, httpOptions);
  }

  // saveToken(token: string): void {
  //   localStorage.setItem('jwtToken', token);
  // }

  // getToken(): string | null {
  //   return localStorage.getItem('jwtToken');
  // }

  // // Khi đăng nhập thành công
  // this.authService.saveToken('your-jwt-token');

  // // Khi đăng xuất
  // this.authService.removeToken();

  // loginWithFacebook(): Observable<any> {
  //   return this.http.get("/login/facebook");
  // }

  // getUserInfo(): Observable<any> {
  //   return this.http.get("/user");
  // }
}
