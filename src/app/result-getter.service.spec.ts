import { TestBed, inject } from '@angular/core/testing';

import { ResultGetterService } from './result-getter.service';

describe('ResultGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultGetterService]
    });
  });

  it('should be created', inject([ResultGetterService], (service: ResultGetterService) => {
    expect(service).toBeTruthy();
  }));
});
