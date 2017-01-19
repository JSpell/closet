import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { DisplayContentComponent } from './displayContent/displayContent.component';
import { AddItemComponent } from './add-item/add-item.component';

import { FirebaseService } from './database.service';
import { SimpleItemComponent } from './simple-item/simple-item.component';


export const firebaseConfig = {
    apiKey: "AIzaSyA9lIOrC2W7wLPG3xOWNjRKD2ilbz9MDY0",
    authDomain: "ux-angular.firebaseapp.com",
    databaseURL: "https://ux-angular.firebaseio.com",
    storageBucket: "ux-angular.appspot.com",
};


@NgModule({
  declarations: [
    AppComponent,
    DisplayContentComponent,
    AddItemComponent,
    SimpleItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
