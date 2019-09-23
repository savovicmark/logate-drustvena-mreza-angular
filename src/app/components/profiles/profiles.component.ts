import { Component, OnInit } from '@angular/core';
import { NewprofilesService } from 'src/app/services/newprofiles.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  profiles: [];

  constructor(private newProfiles: NewprofilesService) { }

  ngOnInit() {
    this.newProfiles.getNewProfiles().subscribe(data=>{
      console.log(data);
      this.profiles = data;
    },
    err => console.log(err))
  }

}
