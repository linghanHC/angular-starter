import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Component } from './child1.component';

describe('BabyComponent', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Child1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
