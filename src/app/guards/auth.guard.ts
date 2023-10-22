import { AuthenticationService } from './../servicios/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authenticationService: AuthenticationService
    ) { }
    canActivate(): boolean {
      return this.authenticationService.isAuthenticated();
    }
  }

  /*canActivate(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  */

