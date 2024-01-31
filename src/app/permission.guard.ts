import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  userRole:any;
  loggedUSer:any;
  permissionArray:string[]=[]

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      const checkUser = sessionStorage.getItem('role');
      if (checkUser) {
       this.loggedUSer = JSON.parse(checkUser);
       this.userRole=this.loggedUSer
      }
   
     
      this.permissionArray=route.data['permission']
 
      if(this.permissionArray.includes(this.userRole)){
        return true
      }else{
        alert("you're not allowed")
        return false
      }
  }
  
}
