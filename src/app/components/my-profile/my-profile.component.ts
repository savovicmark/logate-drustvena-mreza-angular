import { Component, OnInit, ViewChild } from '@angular/core';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { NewprofilesService } from 'src/app/services/newprofiles.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm, NgModel } from '@angular/forms';
import { Status } from '../models/status';
import { StatusService } from 'src/app/services/status.service';
import { DeleteService } from 'src/app/services/delete.service';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload'

import { Profile } from '../models/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  profiles = []
  id: number
  status : string;
  @ViewChild(NgModel) input: NgModel;
  uploader : FileUploader = new FileUploader({url: 'http://localhost:3000/profile/profilePicture', itemAlias: 'profileImg'})
  profile : Profile = new Profile()

  constructor(private myProfileService : MyProfileService, private statusService: StatusService,
    private profileService : NewprofilesService, private http:HttpClient, private deleteService : DeleteService,
    private router: Router) {
      this.id = this.myProfileService.id
     }

  ngOnInit() {
    this.profileService.getOneProfileById(this.id).subscribe(result =>{
      this.deleteService.myProfile = result
    })
    this.uploader.onAfterAddingFile = (file)=> {file.withCredentials = false}
      this.uploader.onCompleteItem = (item:any, response:any, status: any, headers: any) =>{
        response = JSON.parse(response);
        console.log(response)
        if(response.status == 200){
          //console.log(response.status)
          this.profile.profilePicture = 'http://localhost:3000' + '/uploads/' + response.filename;
          this.profile.id = this.myProfileService.id

          this.http.put<any>('http://localhost:3000/profile', this.profile).subscribe(result=>{
            console.log(result)
            this.deleteService.myProfile[0].profilePicture = result.path
          })
        } else {
          console.log(response.status)
          alert('upload failed')
        }
      }
  }

  submitStatus(){
    let status = new Status();
    status.profileId = this.id;
    status.status = this.status;
    this.http.post('http://localhost:3000/status', status).subscribe(result=> {
      //console.log(result)
      this.statusService.statuses = <any>result
      //console.log(this.statusService.statuses)
      
  })
  this.deleteService.myProfile[0].statuses.push(status)
  this.input.reset()
  //console.log(this.input)
  }

  logout(){
    localStorage.removeItem('token');
    this.myProfileService.id = null;
    this.myProfileService.username = null;
    this.router.navigateByUrl('newPictures')
  }

  deleteProfile(){
    this.http.delete<any>('http://localhost:3000/profile',{
      params: new HttpParams().set('id', this.myProfileService.id.toString())
    }).subscribe(result =>{
      if(result.status == 1){
        this.logout()
      }
    })
  }


}
