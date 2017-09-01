import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/MainComponent';
import { LocalFormComponent } from './lform/LocalFormComponent';
import { CommentModule } from './comments/comments.module';
import { CommentComponent } from './comments/components/comment-main';

import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LocalFormComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommentModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
