import { TestBed, inject } from '@angular/core/testing';

import { P3Service } from './p3.service';

describe('P3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [P3Service]
    });
  });

  it('should be created', inject([P3Service], (service: P3Service) => {
    expect(service).toBeTruthy();
  }));
});
