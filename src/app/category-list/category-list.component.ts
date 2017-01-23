import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../database.service';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  categories: any;

  constructor(private fbs: FirebaseService) {
    this.fbs.connectToNode("Category");
    this.categories = this.fbs.itemsList;

    this.categories.subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
  }

}
