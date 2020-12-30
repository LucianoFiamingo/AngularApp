import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html'
})
export class SaludoComponent {
  public nombre: string = "Maestro";
}

interface Saludo {
  Id: number,
  Name: string,
  Text: string;
}
