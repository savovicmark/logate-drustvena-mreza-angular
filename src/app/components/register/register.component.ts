import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { RegisterService } from 'src/app/services/register.service';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { MyProfileService } from 'src/app/services/my-profile.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  profile : Profile = new Profile();

  constructor(private registerService: RegisterService,
    private router: Router, private myProfileService: MyProfileService) { }

  ngOnInit() {
    
  }
  submit(){
    this.registerService.addProfile(this.profile).subscribe(result =>{
      let token = result.token
      let encryptData = token.split('.')[1]
      let decryptData = JSON.parse(window.atob(encryptData))
      this.myProfileService.id = decryptData.id
      this.myProfileService.username = decryptData.username
      console.log(this.myProfileService.id)
      console.log(result);
      localStorage.setItem('token', result.token)
      this.router.navigateByUrl("newPictures")
    },
    err=> console.log(err))
  }

}
