import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  count: string = '';
  result: number;

  constructor() {}

  addToCount(value: string) {
    this.count += value;
  }

  clear() {
    this.count = '';
  }

  removeLast() {
    this.count = this.count.slice(0, this.count.length - 1);
  }
}
