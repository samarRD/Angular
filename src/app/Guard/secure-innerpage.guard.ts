import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './../Service/user.service';

@Injectable({
  providedIn: 'root'
})
export class SecureInnerpageGuard implements CanActivate {
  constructor(public tokenStorageService: UserService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.tokenStorageService.getToken() !== null) {
      alert("Access Denied !!!");
      this.router.navigate(['/home']);
    }
    return true;
    }

}
