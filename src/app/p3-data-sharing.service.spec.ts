import { TestBed, inject } from '@angular/core/testing';

import { P3DataSharingService } from './p3-data-sharing.service';

describe('P3DataSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [P3DataSharingService]
    });
  });

  it('should be created', inject([P3DataSharingService], (service: P3DataSharingService) => {
    expect(service).toBeTruthy();
  }));
});
