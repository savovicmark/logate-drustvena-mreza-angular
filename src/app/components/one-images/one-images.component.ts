import { Component, OnInit, Input, ViewChildren, QueryList } from '@angular/core';
import { ImgcommentService } from 'src/app/services/imgcomment.service';
import { OneProfileIdService } from 'src/app/services/one-profile-id.service';
import { NgForm, NgModel } from '@angular/forms';
import { KomentarimgComponent } from '../komentarimg/komentarimg.component';
import { ImgComments } from '../models/imgComments';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PictureLike } from '../models/pictureLike';
import { PictureLikeService } from 'src/app/services/picture-like.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-one-images',
  templateUrl: './one-images.component.html',
  styleUrls: ['./one-images.component.scss']
})
export class OneImagesComponent implements OnInit {

  images = [];
  comment: string;
  @ViewChildren(KomentarimgComponent) childComponent: QueryList<any>
  @ViewChildren(NgModel) inputs : QueryList<any>

  constructor(private imgcommentService: ImgcommentService, 
    private oneProfileIdService : OneProfileIdService, private myProfileService : MyProfileService,
    private httpService : HttpClient, private pictureLikeService: PictureLikeService, private router: Router) { }

  ngOnInit() {
    this.imgcommentService.getImagesForOneProfile(this.oneProfileIdService.id).subscribe(result=>{
      this.images= result
    })
  }

  submitImgComment(pictureId:number):void{
    let imgComments: ImgComments = new ImgComments()
    imgComments.pictureId = pictureId;
    imgComments.profileId = this.myProfileService.id
    imgComments.comment = this.comment
    
    this.httpService.post('http://localhost:3000/pictureComment', imgComments).subscribe(result =>{
      this.childComponent.forEach(child => {
        if(child.pictureId == pictureId){
         child.imgComments = result
        }
      })
      this.inputs.forEach(input => input.reset())
     })
    }

    submitImgLike(pictureId: number, i:number):void{
      let imgLike = new PictureLike();
      imgLike.pictureId = pictureId
      imgLike.profileId = this.myProfileService.id
      console.log(i)
      console.log(this.images[i].pictureLikes)

      this.httpService.post('http://localhost:3000/pictureLike', imgLike).subscribe(result =>{
        this.images[i].pictureLikes = result
        console.log(this.images[i].pictureLikes)
        this.images = this.images
      })
    }

    deleteImgLike(pictureId:number, i:number):void{
        
      this.httpService.delete('http://localhost:3000/pictureLike',{
        params : new HttpParams().set('pictureId', pictureId.toString()).set('profileId',
        this.myProfileService.id.toString())
      }).subscribe(result =>{
        this.images[i].pictureLikes = result
        this.images = this.images
      })

    }

    viewLikes(id: number):void{
      this.router.navigate(['/viewPictureLikes'],{
        queryParams: {pictureId : id}
      })
    }

      

}
