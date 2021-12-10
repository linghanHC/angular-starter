import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component  {
  readonly title = 'angular-lifecycle';
  showLifeCycleDemo = false;
  count = 0;

  flipShowLifeCycleState(): void {
    this.showLifeCycleDemo = !this.showLifeCycleDemo;
  }

  incrementCount(): void {
    this.count++;
  }

}
