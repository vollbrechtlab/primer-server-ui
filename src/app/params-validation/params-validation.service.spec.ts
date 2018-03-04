import { TestBed, inject } from '@angular/core/testing';

import { ParamsValidationService } from './params-validation.service';

describe('ParamsValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParamsValidationService]
    });
  });

  it('should be created', inject([ParamsValidationService], (service: ParamsValidationService) => {
    expect(service).toBeTruthy();
  }));
});
