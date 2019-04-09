import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputAreaComponent } from './input-area/input-area.component';
import { MaterialModule } from './components/material.module';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { ChatBarComponent } from './chat-bar/chat-bar.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { NavTopComponent } from './nav-top/nav-top.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    InputAreaComponent,
    LoginDialogComponent,
    ChatBarComponent,
    NavLeftComponent,
    MainComponent,
    LoginComponent,
    NavTopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
