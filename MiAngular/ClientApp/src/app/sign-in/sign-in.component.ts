import { Component } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  public constructor(protected titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle("Sign In");
  }

}
