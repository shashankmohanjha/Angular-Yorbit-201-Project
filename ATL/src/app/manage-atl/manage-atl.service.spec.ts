import { TestBed } from '@angular/core/testing';

import { ManageAtlService } from './manage-atl.service';

describe('ManageAtlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageAtlService = TestBed.get(ManageAtlService);
    expect(service).toBeTruthy();
  });
});
