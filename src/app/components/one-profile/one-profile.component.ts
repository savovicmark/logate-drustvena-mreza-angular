import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'
import { NewprofilesService } from 'src/app/services/newprofiles.service';
import { OneProfileIdService } from 'src/app/services/one-profile-id.service';
import { AdminService } from 'src/app/services/admin.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-one-profile',
  templateUrl: './one-profile.component.html',
  styleUrls: ['./one-profile.component.scss'],
  providers: [OneProfileIdService]
})
export class OneProfileComponent implements OnInit {

  profiles = [];
  id: number;

  constructor(private router: ActivatedRoute, private profileService: NewprofilesService,
    private oneProfileIdService : OneProfileIdService, private adminService: AdminService, 
    private http: HttpClient, private route: Router) {
    this.router.params.subscribe(result=>{
      this.id = parseInt(result['id'])
   })
  }

  ngOnInit() {
    this.profileService.getOneProfileById(this.id).subscribe(result=>{
      console.log(result)
      this.profiles = result;
      this.oneProfileIdService.id = result[0].id
    })
  }

  deleteProfile(id: number){
    this.http.delete<any>('http://localhost:3000/profile',{
      params: new HttpParams().set('id', id.toString())
    }).subscribe(result =>{
      if(result.status == 1){
        this.route.navigateByUrl('/newPictures')
      }
    })
  }

}
