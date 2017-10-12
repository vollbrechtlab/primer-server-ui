import { TestBed, inject } from '@angular/core/testing';

import { PrimerServerService } from './primer-server.service';

describe('PrimerServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrimerServerService]
    });
  });

  it('should be created', inject([PrimerServerService], (service: PrimerServerService) => {
    expect(service).toBeTruthy();
  }));
});
