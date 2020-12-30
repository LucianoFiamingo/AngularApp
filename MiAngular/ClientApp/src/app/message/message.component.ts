import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../Intefaces';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})

export class MessageComponent {
  @Input() oMessage: Message;
  @ViewChild('msg', null) msg: ElementRef;

  constructor() {
    //this.Iniciar();
  }

  public Iniciar() {
    this.msg.nativeElement.setAttribute("style", "color:orange");
  }
}
