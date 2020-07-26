import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let isAuth = this.authService.isAuthenticated();
    const url: string = state.url;
    if (url === '/login' && isAuth) {
      this.router.navigate(['dashboard/dashboard1']);
    } else if (!isAuth) {
      this.router.navigate(['/login']);
    } else {
      console.log(1)
      return true;
    }
  }
}
