import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalParamComponent } from './additional-param.component';
import { P3Service } from '../p3.service';
import { DescriptionDialogService } from '../description-dialog/description-dialog.service';
import { PrimengModule } from '../primeng/primeng.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

describe('AdditionalParamComponent', () => {
  let component: AdditionalParamComponent;
  let fixture: ComponentFixture<AdditionalParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, PrimengModule, BrowserAnimationsModule, AngularMaterialModule],
      providers: [ P3Service, DescriptionDialogService ],
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
