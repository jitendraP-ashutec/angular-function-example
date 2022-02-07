import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public isDisplay = false;
  public orders = [
    { id: 1, name: 'Name 1', price: 10, available: 1, qty: 3, totalPrice: 0 },
    { id: 1, name: 'Name 2', price: 15, available: 1, qty: 2 },
    { id: 1, name: 'Name 3', price: 20, available: 0, qty: 6 },
    { id: 1, name: 'Name 4', price: 25, available: 1, qty: 8 },
    { id: 1, name: 'Name 5', price: 30, available: 0, qty: 1 },
    { id: 1, name: 'Name 6', price: 4, available: 1, qty: 2 },
    { id: 1, name: 'Name 7', price: 22, available: 1, qty: 6 },
    { id: 1, name: 'Name 8', price: 11, available: 0, qty: 1 },
  ];
  name = 'Angular ' + VERSION.major;
  addition = 0;
  getTotalPrice(price, qty) {
    const total = price * qty;
    return total;
  }

  constructor() {
    this.sum(1, 2);
    this.makeTotal();
    setTimeout(() => {
      this.isDisplay = true;
    }, 1000);
    // const average = this.utilityService.calculateAveg([1, 2, 3, 5]);
  }

  makeTotal() {
    this.orders = [
      ...this.orders.map((order: any) => {
        order['totalPrice'] = order.price * order.qty;
        return order;
      }),
    ];
  }

  sum(num1, num2) {
    this.addition = num1 + num2;
  }
}
