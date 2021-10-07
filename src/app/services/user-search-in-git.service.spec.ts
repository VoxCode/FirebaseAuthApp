import { TestBed } from '@angular/core/testing';

import { UserSearchInGitService } from './user-search-in-git.service';

describe('UserSearchInGitService', () => {
  let service: UserSearchInGitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSearchInGitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
