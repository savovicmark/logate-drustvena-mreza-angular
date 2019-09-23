import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { KomentarimgService } from 'src/app/services/komentarimg.service';
import { MyProfileService } from 'src/app/services/my-profile.service';
import { DeleteService } from 'src/app/services/delete.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-komentarimg',
  templateUrl: './komentarimg.component.html',
  styleUrls: ['./komentarimg.component.scss']
})
export class KomentarimgComponent implements OnInit {

  @Input()pictureId: number;
  imgComments: [];

  constructor(private komentarimgService: KomentarimgService, private myProfileService: MyProfileService,
    private deleteService: DeleteService, private http: HttpClient) { }

  ngOnInit() {
    this.komentarimgService.getAllCommentsByPictureId(this.pictureId)
    .subscribe(data => { console.log(data);
     this.imgComments = data},
      err => console.log(err)
      )
  }

  deleteComment(pictureId:number, commentId:number):void{
    this.http.delete('http://localhost:3000/pictureComment',{
      params: new HttpParams().set('pictureId', pictureId.toString()).set('commentId', commentId.toString())
    }).subscribe(result=> {
      this.imgComments = <any>result
    })
  }
  
}
