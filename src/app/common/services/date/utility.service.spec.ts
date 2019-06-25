import { async, TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';
import {HttpClientModule} from '@angular/common/http';

describe('UtilityService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilityService = TestBed.get(UtilityService);
    expect(service).toBeTruthy();
  });
});
