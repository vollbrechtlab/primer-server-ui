import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAreaComponent } from './submit-area.component';

describe('SubmitAreaComponent', () => {
  let component: SubmitAreaComponent;
  let fixture: ComponentFixture<SubmitAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
