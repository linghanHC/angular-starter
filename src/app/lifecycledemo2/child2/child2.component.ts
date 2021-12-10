import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked
{
  counter = 0;
  interval: any;

  @Input()
  firstName = '';

  // the second parameter static: true enable the object can be access in ...
  // this feature is from Angular 9
  @ContentChild('parentContent', {static: true}) parentContent: any;
  @ViewChild('childContent', {static: true}) childContent: any;

  constructor() {
    console.log('Child Constructor called');
  }

  // Called once before ngOnInit() (if the component has bound inputs) and whenever one or more data-bound input properties change.
  // the data-bound input is not in the same component, it should be some input from outside through input, check "channelName" in this example
  // it is called on every keystroke of the input, so it is not a good idea to call any expensive activities, eg API calls
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log('Child Onchanges');
    console.log('  onChanges this.parentContent - ' + this.parentContent);
    console.log('  onChanges this.childContent - ' + this.childContent);
  }

  // Called once after the first ngOnChanges
  ngOnInit(): void {
    console.log('Child OnInit - component is initialized');
    console.log('  init this.parentContent - ' + this.parentContent);
    console.log('  init this.childContent - ' + this.childContent);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }

  // is called when the component is removed from the DOM
  // normally for clean activities, such as prevent the memeory leaking (remove the counter), unsubscribe any subscribe of any observables
  ngOnDestroy() {
    // clearInterval(this.interval);    // demo of the cleanup to prevent memeory leaking
    console.log('Child OnDestroy - component is destroyed');
  }

  // Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
  // it is triggered on direct changes??
  // also avoid expensive operations in it, eg API calls
  // should also avoid use ngOnChanges and ngDoCheck in the same component
  ngDoCheck() {
    console.log('Child DoCheck');
    console.log('  doCheck this.parentContent - ' + this.parentContent);
    console.log('  doCheck this.childContent - ' + this.childContent);
  }

  // Called once after the first ngDoCheck().
  ngAfterContentInit() {
    console.log('**Child After Content Init');
    console.log('  AfterContentInit this.parentContent - ' + this.parentContent);
    console.log('  AfterContentInit this.childContent - ' + this.childContent);
  }

  // Called after ngAfterContentInit() and every subsequent ngDoCheck().
  ngAfterContentChecked() {
    console.log('$$Child After Content checked');
    console.log('  AfterContentChecked this.childContent - ' + this.childContent);
  }

  // Called once after the first ngAfterContentChecked().
  ngAfterViewInit() {
    console.log('##Child After View Init');
    console.log('  AfterViewInit this.childContent - ' + this.childContent);
  }

  // Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().
  ngAfterViewChecked() {
    console.log('~~Child After View checked');
  } 
}