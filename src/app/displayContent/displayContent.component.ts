
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'display-content',
  template: `
  <ul>
    <li *ngFor="let item of items | async">
      {{ item.$key }} - {{ item.text }} - {{ item.$value }}
    </li>
  </ul>
  `,
})
export class DisplayContentComponent {
  items: FirebaseListObservable<any[]>;
  sizeSubject: Subject<any>;

  constructor(af: AngularFire) {
    this.sizeSubject = new Subject();
    this.items = af.database.list('/items', {
      query: {
        orderByValue: true,
        // equalTo:,
        // startAt: "billy",
        // endAt: "z"
      }
    });

    this.items.subscribe(item => {
      console.log(item);
    });
  }
  filterBy(size: string) {
    this.sizeSubject.next(size); 
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FirebaseService } from '../database.service';

// @Component({
//   selector: 'display-content',
//   templateUrl: './displayContent.component.html',
//   styleUrls: ['./displayContent.component.scss'],
// })
// export class DisplayContentComponent implements OnInit {

//   //set items as a firebase list observable
//   items: any;  
//   itemsLoaded: boolean;
//   numberOfItems: number;
//   thisObj: any;

//   constructor(private fbs: FirebaseService) { 
//     this.getItems("items");
//   }

//   removeItem(key) {
//     this.items.remove(key);
//   }

//   getItems(node) {
//     this.fbs.connectToNode(node);
//     this.items = this.fbs.itemsList;

//     this.items.subscribe(result => {
//       this.itemsLoaded = true;
//       this.numberOfItems = result.length;
//     });
//   }

//   typeOf(val) {
//     console.log(typeof(val));
//   }

//   ngOnInit() {
//   }

// }