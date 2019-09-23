import { Component } from '@angular/core';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router';
import { MyProfileService } from './services/my-profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projekat-frontend';
  constructor(private registerService: RegisterService,
    private router: Router, private myProfileService : MyProfileService){}


  logout(){
    localStorage.removeItem('token');
    this.myProfileService.id = null;
    this.myProfileService.username = null;
    this.router.navigateByUrl('newPictures')
  }
}
