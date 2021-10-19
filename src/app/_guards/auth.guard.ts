import { AccountService } from './../services/account.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  //
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate() {
    if (!this.accountService.isLoggedIn()) {
      this.router.navigate(['/auth/']);
      return false;
    } else {
      return true;
    }
  }
}
