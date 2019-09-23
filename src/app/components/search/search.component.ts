import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  profile : Profile = new Profile()

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search():void{
    this.router.navigate(['/searchResults',{ firstName : this.profile.firstName, lastName: this.profile.lastName,
      username: this.profile.username }])
  }

}
