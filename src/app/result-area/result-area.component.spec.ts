import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAreaComponent } from './result-area.component';

describe('ResultAreaComponent', () => {
  let component: ResultAreaComponent;
  let fixture: ComponentFixture<ResultAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
