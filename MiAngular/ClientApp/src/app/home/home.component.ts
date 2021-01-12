import { Component } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public constructor(protected titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle("Home");
  }

}
