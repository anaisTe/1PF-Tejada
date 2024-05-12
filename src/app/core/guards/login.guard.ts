import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const _authService = inject(LoginService);

  const isAuth = _authService.verifyToken();

  return isAuth || router.createUrlTree(['login']);
};
