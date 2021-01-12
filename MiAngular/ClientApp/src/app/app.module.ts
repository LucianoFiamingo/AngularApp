import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { UserComponent } from './user/user.component';

import { ChatService } from './services/chat.service';
import { UserService } from './services/user.service';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    PageNotFoundComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    ChatComponent,
    MessageComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'chat', component: ChatComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [ChatService, UserService, TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
