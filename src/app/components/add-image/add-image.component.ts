import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { Router } from '@angular/router';
import { Images } from '../models/images';
import { HttpClient } from '@angular/common/http';
import { MyProfileService } from 'src/app/services/my-profile.service';
import {NgForm, NgModel} from '@angular/forms'


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  picture : Images = new Images()
  uploader : FileUploader = new FileUploader({url: 'http://localhost:3000/picture/upload',
                                              itemAlias: 'img'})

  constructor(private router : Router, private http: HttpClient, private myProfileService : MyProfileService) {
    this.uploader.onAfterAddingFile = (file)=>{file.withCredentials = false}
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any)=>{
      response = JSON.parse(response);
      if(response.status == 200){
        this.picture.path = 'http://localhost:3000' + '/uploads/' + response.filename;
        this.picture.profileId = this.myProfileService.id
        this.http.post('http://localhost:3000/picture', this.picture).subscribe(result =>{
          this.router.navigateByUrl('/profile/myProfile')
        })
      } else {
        alert('Greska u uploadu slike')
      }
    }
  }

  ngOnInit() {
  }

}
