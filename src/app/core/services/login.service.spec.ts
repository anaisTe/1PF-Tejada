import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should logout user', () => {
    const authUserSpy = spyOn(service['_authUser$'], 'next').and.callThrough();
    
    service.logout();

    expect(authUserSpy).toHaveBeenCalledWith(null);

    expect(localStorage.getItem('accessToken')).toBeNull();
  });
});
