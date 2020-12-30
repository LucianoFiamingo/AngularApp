import { Component, Inject, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../services/chat.service';
import { Observable } from 'rxjs';
import { Message } from '../Intefaces';
import { FormControl } from '@angular/forms';

declare const cargaJSFile : any;
declare const escribiendoJSFile : any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  public listMsgs: Observable<Message[]>;

  nameControl = new FormControl('');
  textControl = new FormControl('');
  @ViewChild('text', null) text: ElementRef;
  @ViewChild('chatDiv', null) chatDiv: ElementRef;

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string,
    protected chatService: ChatService) {
    this.Iniciar();
  }

  public Iniciar() {
    this.GetInfo();
    setTimeout(() => {
      cargaJSFile();
    }, 50);
    setTimeout(() => {
      escribiendoJSFile();
    }, 50);
  }

  public GetInfo() {
    this.listMsgs = this.chatService.GetMessages();
  }  

  public Escribiendo(event) {
    if (event.keyCode === 13 && event.shiftKey === false) {
      this.SendMessage();
      setTimeout(() => {
        escribiendoJSFile();
      }, 50);
    }
  }

  public SendMessage() {
    this.chatService.Add(this.nameControl.value, this.textControl.value);

    setTimeout(() => {
      this.GetInfo();
    }, 300);

    this.textControl.setValue('');
    this.text.nativeElement.focus();
  }

}
