import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImgcommentComponent } from './components/imgcomment/imgcomment.component';
import { StatusComponent } from './components/status/status.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { OneProfileComponent } from './components/one-profile/one-profile.component';
import { OneImagesComponent } from './components/one-images/one-images.component';
import { OneStatusesComponent } from './components/one-statuses/one-statuses.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyProfileImagesComponent } from './components/my-profile-images/my-profile-images.component';
import { MyStatusesComponent } from './components/my-statuses/my-statuses.component';
import { RouteGuardService } from './services/route-guard.service';
import { AddImageComponent } from './components/add-image/add-image.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PictureLikeComponent } from './components/picture-like/picture-like.component';
import { StatusLikesComponent } from './components/status-likes/status-likes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'newPictures', component: ImgcommentComponent},
  {path: '', redirectTo: 'newPictures', pathMatch: 'full'},
  {path: 'newStatuses', component: StatusComponent},
  {path: 'newProfiles', component: ProfilesComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'addPicture', component: AddImageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'searchResults', component: SearchResultsComponent},
  {path: 'viewPictureLikes', component: PictureLikeComponent},
  {path: 'viewStatusLikes', component: StatusLikesComponent},
  {path: 'profile/myProfile', component: MyProfileComponent,
  children:[
              {path:'oneProfileImages', component: MyProfileImagesComponent},
              {path:'', redirectTo: 'oneProfileImages', pathMatch: 'full'},
              {path: 'oneProfileStatuses', component: MyStatusesComponent}
  ]},
  {path: 'profile/:id', canActivate: [RouteGuardService], component: OneProfileComponent,
  children: [
              {path:'oneProfileImages',canActivate: [RouteGuardService], component: OneImagesComponent},
              {path:'',canActivate: [RouteGuardService], redirectTo: 'oneProfileImages', pathMatch: 'full'},
              {path: 'oneProfileStatuses',canActivate: [RouteGuardService], component: OneStatusesComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
