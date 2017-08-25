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

  it('should return empty', inject([P3Service], (service: P3Service) => {
    expect(service.convertArrToStrList(null)).toEqual('');
  }));

  it('should return null', inject([P3Service], (service: P3Service) => {
    expect(service.convertStrListToArr(null)).toEqual(null);
  }));
});
