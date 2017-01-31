import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../database.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'pieces-list',
  templateUrl: './pieces-list.component.html',
  styleUrls: ['./pieces-list.component.scss']
})
export class PiecesListComponent implements OnInit {

  // loaded: boolean = false;
  pieces: any;
  query: any;
  newList: any;

  constructor(private fbs: FirebaseService) {
    
    this.fbs.connectToNode("pieces");
    this.pieces = this.fbs.itemsList;
    
     this.pieces.subscribe(parts => {
       this.newList = parts;
    });

    console.log(this.newList);


    this.pieces = this.pieces.map(pieces => {
      return pieces.map(item => {
        item.arrayOfKeys = Object.keys(item).filter(x => {
            return x.charAt(0) !== "$";
        });
        return item;
      })
    });

  }

  ngOnInit() {}

}
