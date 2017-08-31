import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqBarChartComponent } from './sq-bar-chart.component';

describe('SqBarChartComponent', () => {
  let component: SqBarChartComponent;
  let fixture: ComponentFixture<SqBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
