import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'simple-item',
  templateUrl: './simple-item.component.html',
  styleUrls: ['./simple-item.component.scss']
})
export class SimpleItemComponent implements OnInit {
  @Input() item:any;

  constructor() { }

  ngOnInit() {
  }

}
