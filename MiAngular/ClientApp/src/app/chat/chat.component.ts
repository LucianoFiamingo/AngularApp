import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { Message, User } from '../Intefaces';
import { FormControl } from '@angular/forms';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  @ViewChild("chatDiv", null) chatDiv: ElementRef;
  @ViewChild("text", null) textarea: ElementRef;
  @ViewChild("user", null) userDiv: ElementRef;

  public listMsgs: Observable<Message[]>;
  
  public user: User;
  nameControl = new FormControl('');
  textControl = new FormControl('');

  constructor(http: HttpClient, protected titleService: TitleService, protected chatService: ChatService,
             protected userService: UserService, private renderer: Renderer2) {
  }

  ngOnInit() {

    this.titleService.setTitle("Chat");

    this.getInfo();

    setTimeout(() => {
      this.scrollBottom();
    }, 200);

    this.getUser();
  }

  public getInfo() {
    this.listMsgs = this.chatService.GetMessages();
  }

  public getUser() {
    this.userService.getLoggedUser().subscribe(data =>
      this.user = data);
  }
  
  public autoSize(event) {

    var { formattedWidth, TEXTTAREA } = this.getWidthText();
    const rest: number = 100;

    if (event.shiftKey === true || formattedWidth > TEXTTAREA.offsetWidth - rest) {
      this.renderer.setStyle(TEXTTAREA, 'height', '66px');
    }
    if (formattedWidth < TEXTTAREA.offsetWidth - rest) {
      this.renderer.setStyle(TEXTTAREA, 'height', '38px');
    }
  }

  private getWidthText() {
    const TEXTTAREA = this.textarea.nativeElement;

    const inputText = TEXTTAREA.value;
    const font = "1rem calibri";

    let canvas = document.createElement("canvas");
    let context = canvas.getContext("2d");
    context.font = font;
    let width = context.measureText(inputText).width;
    let formattedWidth = Math.ceil(width);

    return { formattedWidth, TEXTTAREA };
  }

  public scrollBottom() {
    const chat = this.chatDiv.nativeElement;
    chat.scrollTop = chat.scrollHeight;
  }

  public writting(event) {

    if (event.keyCode === 13 && event.shiftKey === false) {
      this.sendMessage();
      setTimeout(() => {
        this.autoSize(event);
      }, 50);
    }
    this.autoSize(event);
  }

  public sendMessage() {

    const TEXTTAREA = this.textarea.nativeElement;
    TEXTTAREA.focus();
    console.log(this.nameControl.value);
    console.log(this.textControl.value);

    if (this.textControl.value !== "" && this.nameControl.value !== null) {
      this.chatService.Add(this.nameControl.value, this.textControl.value);
      setTimeout(() => {
        this.ngOnInit();
      }, 50);
      setTimeout(() => {
        TEXTTAREA.value = "";
      }, 50);
    }
  }

}
