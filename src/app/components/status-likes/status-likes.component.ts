import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-status-likes',
  templateUrl: './status-likes.component.html',
  styleUrls: ['./status-likes.component.scss']
})
export class StatusLikesComponent implements OnInit {

  likes = []

  constructor(private route:ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let statusId = this.route.snapshot.queryParams['statusId']
    this.http.get('http://localhost:3000/statusLike',{
      params: new HttpParams().set('statusId', statusId)
    }).subscribe(result => this.likes = <any>result)

  }

}
