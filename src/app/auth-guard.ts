import { CanActivateFn,Router } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authSvc = inject(AuthService);
  const router = inject(Router);

  if(authSvc.isLoggedIn) 
    {
      return true;
      }
  else return false;
};
