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

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    InputAreaComponent,
    LoginDialogComponent,
    ChatBarComponent,
    NavLeftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
