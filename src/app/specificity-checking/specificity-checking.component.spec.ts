import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificityCheckingComponent } from './specificity-checking.component';

describe('SpecificityCheckingComponent', () => {
  let component: SpecificityCheckingComponent;
  let fixture: ComponentFixture<SpecificityCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificityCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificityCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
