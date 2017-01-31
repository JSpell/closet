import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../database.service';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categoriesObs: any;
  loaded: boolean = false;
  categorySelection: any;
  categoriesArray: any;
  type: any;
  typeSelection: any;

  mappedResult: any;

  constructor(private fbs: FirebaseService) {
    this.fbs.connectToNode("category");
    this.categoriesObs = this.fbs.itemsList;

    this.categoriesObs.subscribe(result => {
      console.log(result);
      this.loaded = true;
    });
  }

  selectedItem(selection) {
    this.categorySelection = selection;
    this.categoriesObs.subscribe(result => {
      result.map(sub => {
      if(sub.$key == selection)
        this.type = sub.filter(x => {
            return x.charAt(0) !== "$";
        });
      });
    });
    this.typeSelection = undefined;
  }

  selectedType(selection) {
    this.typeSelection = selection;
  }



  ngOnInit() {
  }

}
