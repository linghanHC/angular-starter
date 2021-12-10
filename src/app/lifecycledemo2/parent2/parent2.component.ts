import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit, OnChanges, DoCheck {

  isChild = true;
  firstName = "";

  constructor() {
    console.log("Parent Constructor called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit - component is initialized");
  }

  ngOnChanges() {
    console.log("Parent Onchanges");
  }

  ngDoCheck() {
    console.log("Parent DoCheck");
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

}