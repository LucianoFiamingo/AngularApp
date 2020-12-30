import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '../Intefaces';
import { Observable } from 'rxjs';

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
}

