import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { Message } from '../Intefaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  public listMsgs: Observable<Message[]>;
  nameControl = new FormControl('');
  textControl = new FormControl('');

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string,
    protected chatService: ChatService) {
    this.GetInfo();
  }

  public GetInfo() {
    this.listMsgs = this.chatService.GetMessages();
  }

  public SendMessage() {
    this.chatService.Add(this.nameControl.value, this.textControl.value);

    setTimeout(() => {
      this.GetInfo();
    }, 300);

    this.textControl.setValue('');
  }

}
