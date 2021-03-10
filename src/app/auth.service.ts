import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('http://3.83.162.199/api/login', {email: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          return true;
        })
      );
  }

  register(password: string, email: string, mobile: string, name: string): Observable<boolean> {
    return this.http.post<{token: string}>('http://3.83.162.199/api/register', { password: password, name: name, email: email, mobile: mobile})
      .pipe(
        map(result => {
          if (result.token) {
            localStorage.setItem('access_token', result.token);
            // code...
            return true;
          }
          else
            return false;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
