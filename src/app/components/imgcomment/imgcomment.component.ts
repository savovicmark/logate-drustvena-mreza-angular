import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import {Images} from './../models/images'
import { ImgcommentService } from 'src/app/services/imgcomment.service';
import {NgForm, NgModel} from '@angular/forms'
import { MyProfileService } from 'src/app/services/my-profile.service';
import {ImgComments} from './../models/imgComments'
import { HttpClient, HttpParams } from '@angular/common/http';
import { KomentarimgComponent } from '../komentarimg/komentarimg.component';
import { RegisterService } from 'src/app/services/register.service';
import { PictureLikeService } from 'src/app/services/picture-like.service';
import { PictureLike } from '../models/pictureLike';
import { DeleteService } from 'src/app/services/delete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imgcomment',
  templateUrl: './imgcomment.component.html',
  styleUrls: ['./imgcomment.component.scss']
})
export class ImgcommentComponent implements OnInit {

  images: any[];
  comment: string;
  @ViewChildren(KomentarimgComponent) childComponent: QueryList<any>
  @ViewChildren(NgModel) inputs : QueryList<any>
  

  constructor(private imgcommentService: ImgcommentService, private registerService: RegisterService,
     private myProfileService: MyProfileService, private httpService: HttpClient, private pictureLikeService: PictureLikeService,
     private deleteService : DeleteService, private router: Router) { }

  ngOnInit(): void {
    this.imgcommentService.getNewImages().subscribe(newimages => {
      console.log(newimages);
      this.images = newimages;
    }, err => {
      console.log(err)
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

      deleteImage(id:number):void{
        this.httpService.delete('http://localhost:3000/picture/newPictures',{
          params: new HttpParams().set('id', id.toString())
        }).subscribe(result=>{
          this.images = <any>result
        })
      }

      viewLikes(id: number):void{
        this.router.navigate(['/viewPictureLikes'],{
          queryParams: {pictureId : id}
        })
      }


}
