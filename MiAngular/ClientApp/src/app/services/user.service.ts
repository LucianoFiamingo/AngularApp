import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, MyResponse } from '../Intefaces';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : 'my-auth-token'
  })
}

@Injectable({ providedIn: 'root' })
export class UserService {

  baseUrl: string;
  baseUrl2: string = "https://localhost:44373/";

  constructor(protected http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public getLoggedUser(): Observable<User> {
    return this.http.get<User>(this.baseUrl + "api/User/Logged")
  }

}

