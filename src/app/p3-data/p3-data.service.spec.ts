import { TestBed, inject } from '@angular/core/testing';

import { P3DataService } from './p3-data.service';

describe('P3DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [P3DataService]
    });
  });

  it('should be created', inject([P3DataService], (service: P3DataService) => {
    expect(service).toBeTruthy();
  }));
});
