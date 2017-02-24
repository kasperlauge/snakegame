import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { GameFieldComponent } from './game-field/game-field.component';
import {SaveHighScoreService } from "./save-high-score.service";
import { HighScoreComponent } from './game-field/high-score/high-score.component';
import { SortService } from "./sort.service";

export const firebaseConfig = {
  apiKey: 'AIzaSyAWdaaBgr_8qg6wQt6Beaq_y9BUrhUddms',
  authDomain: 'snake-82007.firebaseapp.com',
  databaseURL: 'https://snake-82007.firebaseio.com',
  storageBucket: 'snake-82007.appspot.com',
  messagingSenderId: '285106597705'
};

@NgModule({
  declarations: [
    AppComponent,
    GameFieldComponent,
    HighScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [SaveHighScoreService, SortService],
  bootstrap: [AppComponent]
})
export class AppModule { }
