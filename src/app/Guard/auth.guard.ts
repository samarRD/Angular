import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: UserService, public router: Router) {}
// https://levelup.gitconnected.com/route-guards-angular-1ea6e596ce65       authgurad
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.authService.getToken() === null) {
      console.log("Access Denied !!!");
      this.router.navigate(['/authentification'], { queryParams: { returnUrl: state.url } })

    }
    return true;
  }

}
