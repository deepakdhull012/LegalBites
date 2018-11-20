import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  server = 'https://agile-inlet-67707.herokuapp.com/api/';

  constructor(private http: HttpClient) {

  }

  loginUser(loginInfo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(`${this.server}login`, loginInfo, httpOptions);
  }
}
