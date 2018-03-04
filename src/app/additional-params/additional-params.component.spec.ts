import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalParamsComponent } from './additional-params.component';

describe('AdditionalParamsComponent', () => {
  let component: AdditionalParamsComponent;
  let fixture: ComponentFixture<AdditionalParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
