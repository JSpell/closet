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
import { CategoryListComponent } from './category-list/category-list.component';
import { PiecesListComponent } from './pieces-list/pieces-list.component';


export const firebaseConfig = {
    apiKey: "AIzaSyDvs3AL0ywxAzXzcp_18C4A_MzDwWFLyyM",
    authDomain: "closet-57a32.firebaseapp.com",
    databaseURL: "https://closet-57a32.firebaseio.com",
    storageBucket: "closet-57a32.appspot.com",
    messagingSenderId: "707644105922"
};


@NgModule({
  declarations: [
    AppComponent,
    DisplayContentComponent,
    AddItemComponent,
    SimpleItemComponent,
    CategoryListComponent,
    PiecesListComponent,
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
