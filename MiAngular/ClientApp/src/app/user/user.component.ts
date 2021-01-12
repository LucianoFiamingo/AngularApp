import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Intefaces';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {
  public oUser: User;
  public user: Observable<User>;
  public userLog: User;

  constructor(protected userService: UserService) {
  }

  ngOnInit() {
    this.getUser();
  }

  public getUser() {
    const userLogNew: User = { Id: 1, Name: "Pepe" };
    this.oUser = userLogNew;
  }
}
