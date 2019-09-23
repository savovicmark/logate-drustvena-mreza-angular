import { Component, OnInit, Input } from '@angular/core';
import { KomentarstatusService } from 'src/app/services/komentarstatus.service';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { DeleteService } from 'src/app/services/delete.service';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statuscomment',
  templateUrl: './statuscomment.component.html',
  styleUrls: ['./statuscomment.component.scss']
})
export class StatuscommentComponent implements OnInit {

  @Input()statusId: number;
  comments: [];

  constructor(private komentarstatus: KomentarstatusService, private myProfileService: MyProfileService,
    private deleteService : DeleteService, private http: HttpClient) { }

  ngOnInit() {
    this.komentarstatus.getAllCommentsById(this.statusId).subscribe(data=>{
      //console.log(data);
      this.comments = data},
      err => console.log(err))
  }

  deleteComment(statusId:number, commentId:number):void{
    this.http.delete('http://localhost:3000/statusComment',{
      params: new HttpParams().set('statusId', statusId.toString()).set('commentId', commentId.toString())
    }).subscribe(result=> {
      this.comments = <any>result
    })
  }

}
