import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { MyProfileService } from './my-profile.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private registerService: RegisterService, private router: Router,
   private myProfileService: MyProfileService) { }

  canActivate(url: ActivatedRouteSnapshot){
    console.log(url.params['id'])
  
    if(this.registerService.isLogedIn() && url.params['id'] == this.myProfileService.id){
      this.router.navigateByUrl('/profile/myProfile')
      return false
    } else if(this.registerService.isLogedIn()){
      return true
    } else {
      this.router.navigateByUrl('/login')
      return false
    }

  }

}
