import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import {NgForm, NgModel} from '@angular/forms'
import { StatuscommentComponent } from '../statuscomment/statuscomment.component';
import { StatusComment } from '../models/statusComments';
import { RegisterService } from 'src/app/services/register.service';
import { StatusLikeService } from 'src/app/services/status-like.service';
import { StatusLike } from '../models/statusLike';
import { DeleteService } from 'src/app/services/delete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  statuses: any[];
  comment: string;
  @ViewChildren(StatuscommentComponent) childComponent: QueryList<any>
  @ViewChildren(NgModel) inputs : QueryList<any>


  constructor(private statusService : StatusService, private myProfileService : MyProfileService,
    private http: HttpClient, private registerService: RegisterService, private statusLikeService: StatusLikeService,
    private deleteService: DeleteService, private router:Router) { }

  ngOnInit() {
    this.statusService.getAllStatuses().subscribe(data =>{
      console.log(data);
      this.statuses = data},
      err => console.log(err))
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
      this.statuses = this.statuses
    })
  }

  deleteStatusLike(statusId:number, i:number):void{
    this.http.delete('http://localhost:3000/statusLike',{
      params : new HttpParams().set('statusId', statusId.toString()).set('profileId', this.myProfileService.id.toString())
    }).subscribe(result=>{
      this.statuses[i].statusLikes = result
    })
  }

  deleteStatus(id: number):void{
    this.http.delete('http://localhost:3000/status/newStatuses',{
      params: new HttpParams().set('id', id.toString())
    }).subscribe(result =>{
      this.statuses = <any>result
    })
  }

  viewLikes(id: number):void{
    this.router.navigate(['/viewStatusLikes'],{
      queryParams: {statusId : id}
    })
  }

}
