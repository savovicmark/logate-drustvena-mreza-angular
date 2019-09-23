import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-picture-like',
  templateUrl: './picture-like.component.html',
  styleUrls: ['./picture-like.component.scss']
})
export class PictureLikeComponent implements OnInit {

  likes = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let pictureId = this.route.snapshot.queryParams['pictureId'];
    this.http.get('http://localhost:3000/pictureLike',{
      params: new HttpParams().set('pictureId', pictureId)
    }).subscribe(result => this.likes = <any>result)

  }

}
