import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  public orders = [
    { id:1, name: 'Name 1', price:10, available:1 , qty: 3},
    { id:1, name: 'Name 2', price:15, available:1 , qty: 2},
    { id:1, name: 'Name 3', price:20, available:0, qty: 6},
    { id:1, name: 'Name 4', price:25, available:1, qty: 8},
    { id:1, name: 'Name 5', price:30, available:0, qty: 1},
    { id:1, name: 'Name 6', price:4, available:1, qty: 2},
    { id:1, name: 'Name 7', price:22, available:1, qty: 6},
    { id:1, name: 'Name 8', price:11, available:0, qty: 1},
  ]
  name = 'Angular ' + VERSION.major;
}
