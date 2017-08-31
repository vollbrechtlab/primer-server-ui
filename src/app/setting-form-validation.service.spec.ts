import { TestBed, inject } from '@angular/core/testing';

import { Injectable } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators, 
         FormControl, 
         AbstractControl, 
         ValidatorFn } from '@angular/forms';

import { P3Service } from './p3.service';

import { SettingFormValidationService } from './setting-form-validation.service';

describe('SettingFormValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingFormValidationService, P3Service]
    });
  });

  it('should be created', inject([SettingFormValidationService], (service: SettingFormValidationService) => {
    expect(service).toBeTruthy();
  }));

  it('checkIntervalListArr() should return null', inject([SettingFormValidationService], (service: SettingFormValidationService) => {
    expect(service.checkIntervalListArr([[]])).toEqual(null);
  }));
});
