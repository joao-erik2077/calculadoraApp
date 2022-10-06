import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operation: any = '';

  constructor() {}

  addToCount(value: string) {
    this.operation += value;
  }

  clear() {
    this.operation = '';
  }

  removeLast() {
    this.operation = this.operation.slice(0, this.operation.length - 1);
  }

  resolve() {
    this.operation = Function('return ' + this.operation.replaceAll('x', '*').replaceAll('÷', '/'))();
  }
}
