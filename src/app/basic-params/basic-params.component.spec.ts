import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicParamsComponent } from './basic-params.component';

describe('BasicParamsComponent', () => {
  let component: BasicParamsComponent;
  let fixture: ComponentFixture<BasicParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
