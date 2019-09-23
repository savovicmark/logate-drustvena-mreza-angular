import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { StatuscommentComponent } from '../statuscomment/statuscomment.component';
import { NgForm, NgModel } from '@angular/forms';
import { StatusComment } from '../models/statusComments';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StatusLike } from '../models/statusLike';
import { StatusLikeService } from 'src/app/services/status-like.service';
import { DeleteService } from 'src/app/services/delete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-statuses',
  templateUrl: './my-statuses.component.html',
  styleUrls: ['./my-statuses.component.scss']
})
export class MyStatusesComponent implements OnInit {

  comment: string;
  @ViewChildren(StatuscommentComponent) childComponent: QueryList<any>
  @ViewChildren(NgModel) inputs : QueryList<any>

  constructor(private statusService : StatusService, private myProfileService:MyProfileService,
    private http:HttpClient, private statusLikeService: StatusLikeService, private deleteService:DeleteService,
    private router: Router) { }

  ngOnInit() {
    this.statusService.getAllStatusesById(this.myProfileService.id).subscribe(result=>{
      this.statusService.statuses = result
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
      this.statusService.statuses[i].statusLikes = result
      this.statusService.statuses = this.statusService.statuses
    })
  }

  deleteStatusLike(statusId:number, i:number):void{
    this.http.delete('http://localhost:3000/statusLike',{
      params : new HttpParams().set('statusId', statusId.toString()).set('profileId', this.myProfileService.id.toString())
    }).subscribe(result=>{
      this.statusService.statuses[i].statusLikes = result
    })
  }

  deleteStatus(id: number):void{
    this.http.delete('http://localhost:3000/status/myStatus',{
      params: new HttpParams().set('id', id.toString()).set('profileId', this.myProfileService.id.toString())
    }).subscribe(result=>{
      this.statusService.statuses = <any>result
      this.deleteService.myProfile[0].statuses = result
    })
  }

  viewLikes(id: number):void{
    this.router.navigate(['/viewStatusLikes'],{
      queryParams: {statusId : id}
    })
  }


}
