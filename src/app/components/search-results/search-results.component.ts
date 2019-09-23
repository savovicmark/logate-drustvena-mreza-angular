import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  profiles = []

  firstName: string;
  lastName: string;
  username: string;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
      
    }

  ngOnInit() {
    this.firstName = this.route.snapshot.params['firstName'];
      this.lastName = this.route.snapshot.params['lastName'];
      this.username = this.route.snapshot.params['username'];
    this.http.get('http://localhost:3000/search',{
      params : new HttpParams().set('firstName', this.firstName).set('lastName', this.lastName).set('username', this.username)
    }).subscribe(result => this.profiles = <any>result)
  }

}
