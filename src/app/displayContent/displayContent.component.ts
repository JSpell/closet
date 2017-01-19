import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../database.service';

@Component({
  selector: 'display-content',
  templateUrl: './displayContent.component.html',
  styleUrls: ['./displayContent.component.scss'],
})
export class DisplayContentComponent implements OnInit {

  //set items as a firebase list observable
  items: any;  
  itemsLoaded: boolean;
  numberOfItems: number;
  thisObj: any;

  constructor(private fbs: FirebaseService) { 
    this.getItems("items");
  }

  removeItem(key) {
    this.items.remove(key);
  }

  getItems(node) {
    this.fbs.connectToNode(node);
    this.items = this.fbs.itemsList;

    this.items.subscribe(result => {
      this.itemsLoaded = true;
      this.numberOfItems = result.length;
    });
  }

  typeOf(val) {
    console.log(typeof(val));
  }

  ngOnInit() {
  }

}