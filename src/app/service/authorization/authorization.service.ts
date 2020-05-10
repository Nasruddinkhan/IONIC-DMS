import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {


  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const authInfo = {
      authenticated: this.auth.getAuthenticated(),
    };

    if (!authInfo.authenticated) {
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}
