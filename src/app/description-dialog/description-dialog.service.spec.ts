import { TestBed, inject } from '@angular/core/testing';

import { DescriptionDialogService } from './description-dialog.service';

describe('DescriptionDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DescriptionDialogService]
    });
  });

  it('should be created', inject([DescriptionDialogService], (service: DescriptionDialogService) => {
    expect(service).toBeTruthy();
  }));
});
