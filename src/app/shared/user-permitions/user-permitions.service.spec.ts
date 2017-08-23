import { TestBed, inject } from '@angular/core/testing';

import { UserPermitionsService } from './user-permitions.service';

describe('UserPermitionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPermitionsService]
    });
  });

  it('should be created', inject([UserPermitionsService], (service: UserPermitionsService) => {
    expect(service).toBeTruthy();
  }));
});
