import { TestBed, inject } from '@angular/core/testing';

import { JeopardyserviceService } from './jeopardyservice.service';

describe('JeopardyserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeopardyserviceService]
    });
  });

  it('should be created', inject([JeopardyserviceService], (service: JeopardyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
