import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message, MyResponse } from '../Intefaces';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : 'my-auth-token'
  })
}

@Injectable({ providedIn: 'root' })
export class ChatService {

  public algo: string = "Soy un servicio";
  baseUrl: string;

  constructor(protected http: HttpClient, @Inject("BASE_URL") baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public GetMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl + "api/Chat/Message")
  }

  public Add(name, text) {
    this.http.post<MyResponse>(this.baseUrl + 'api/chat/add',
      { 'Name': name, 'Text': text }, httpOptions)
      .subscribe(result => { console.log(result); },
                 error => { console.error(error) })
  }
}

