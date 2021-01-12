import { Component } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public constructor(protected titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle("Sign Up");
  }

}
