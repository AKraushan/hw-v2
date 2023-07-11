import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private autSer:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.IsHaveAccess(route)){
      alert("Access denied")
      this.router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }

  private IsHaveAccess(route: ActivatedRouteSnapshot): boolean{
    let roles = [''];
    this.autSer._Role.subscribe(res =>{roles = res});
    const expectedRole = route.data['expectedRole'];
    const matchRoles = roles.findIndex(role => expectedRole.indexOf(role)  != -1);
    
    return matchRoles < 0 ? false :true;
  }
  
}
