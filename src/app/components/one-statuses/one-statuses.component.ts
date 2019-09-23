import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { OneProfileIdService } from 'src/app/services/one-profile-id.service';
import { StatuscommentComponent } from '../statuscomment/statuscomment.component';
import { NgForm, NgModel } from '@angular/forms';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StatusComment } from '../models/statusComments';
import { StatusLike } from '../models/statusLike';
import { StatusLikeService } from 'src/app/services/status-like.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-one-statuses',
  templateUrl: './one-statuses.component.html',
  styleUrls: ['./one-statuses.component.scss']
})
export class OneStatusesComponent implements OnInit {

  statuses = [];
  comment: string;
  @ViewChildren(StatuscommentComponent) childComponent: QueryList<any>
  @ViewChildren(NgModel) inputs : QueryList<any>

  constructor(private statusService : StatusService,
    private oneProfileIdService: OneProfileIdService, private myProfileService : MyProfileService,
    private http : HttpClient, private statusLikeService: StatusLikeService, private router:Router) { }

  ngOnInit() {
    this.statusService.getAllStatusesById(this.oneProfileIdService.id).subscribe(result=>{
      this.statuses = result
    })
  }

  submitStatusComment(statusId:number):void{
    let statusComments = new StatusComment();
    statusComments.comment = this.comment;
    statusComments.statusId = statusId;
    statusComments.profileId = this.myProfileService.id

    this.http.post('http://localhost:3000/statusComment', statusComments).subscribe(result =>{
        this.childComponent.forEach(child=>{
          if(child.statusId == statusId){
            child.comments = result
          }
        })
        this.inputs.forEach(input => input.reset())
    })
    
  }

  submitStatusLike(statusId:number, i:number):void{
    let statusLike = new StatusLike();
    statusLike.profileId = this.myProfileService.id;
    statusLike.statusId = statusId;
    this.http.post('http://localhost:3000/statusLike', statusLike).subscribe(result=>{
      this.statuses[i].statusLikes = result
      //this.statuses = this.statuses
    })
  }

  deleteStatusLike(statusId:number, i:number):void{
    this.http.delete('http://localhost:3000/statusLike',{
      params : new HttpParams().set('statusId', statusId.toString()).set('profileId', this.myProfileService.id.toString())
    }).subscribe(result=>{
      this.statuses[i].statusLikes = result
    })
  }

  viewLikes(id: number):void{
    this.router.navigate(['/viewStatusLikes'],{
      queryParams: {statusId : id}
    })
  }

}
