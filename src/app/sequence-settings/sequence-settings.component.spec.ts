import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceSettingsComponent } from './sequence-settings.component';

describe('SequenceSettingsComponent', () => {
  let component: SequenceSettingsComponent;
  let fixture: ComponentFixture<SequenceSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
