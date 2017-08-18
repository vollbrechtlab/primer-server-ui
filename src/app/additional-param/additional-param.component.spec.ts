import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalParamComponent } from './additional-param.component';
import { PrimengModule } from '../primeng/primeng.module';

describe('AdditionalParamComponent', () => {
  let component: AdditionalParamComponent;
  let fixture: ComponentFixture<AdditionalParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrimengModule],
      declarations: [ AdditionalParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
