import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { Message } from '../Intefaces';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  public listMsgs: Observable<Message[]>;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string,
    protected chatService: ChatService) {
    this.GetInfo();
  }

  public GetInfo() {
    this.listMsgs = this.chatService.GetMessages();
  }

}
