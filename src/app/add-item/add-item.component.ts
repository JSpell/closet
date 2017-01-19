import { Component, OnInit, Input, Inject} from '@angular/core';
import { FirebaseService } from '../database.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})

export class AddItemComponent implements OnInit {
  @Input() currentKeyValue:number = 0;

  items: any;
  itemsObject: any;
  public newName: string;
  public newKey: any;
  public customItem: any;
  public added: boolean;
  randomValueCount: number = 0;

  constructor(public fbs: FirebaseService) {
    this.items = fbs.itemsList;
    this.itemsObject = fbs.itemsObject;
    this.added = true;
  }

  addItem() {
    if(this.added = this.fbs.addListItem(this.newName))
    {
      this.newName = "";
    }
  }

  addObject() {
    if(this.added = this.fbs.addObjectItem(this.newKey, this.newName)){
      this.newKey = "";
      this.newName = "";
    }
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.addItem();
    }
  }

  generateRandomEntries() {
    var rand = Math.floor(Math.random() * 5) + 5;
    for(var x=1; x < rand; x++ ){
      this.fbs.addListItem("Random Item "+x);
    }
    this.randomValueCount = this.randomValueCount + rand;
  }

  ngOnInit() {
  }

}
