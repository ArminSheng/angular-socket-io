import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputAreaComponent } from './input-area/input-area.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    InputAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
