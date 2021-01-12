import { Component } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {

  public constructor(protected titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle("Page Not Found");
  }

}
