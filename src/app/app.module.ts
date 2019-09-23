import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import {FileSelectDirective} from 'ng2-file-upload'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusComponent } from './components/status/status.component';
import { ImgcommentComponent } from './components/imgcomment/imgcomment.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { KomentarimgComponent } from './components/komentarimg/komentarimg.component';
import { ImgcommentService } from './services/imgcomment.service';
import {KomentarimgService} from './services/komentarimg.service';
import { StatuscommentComponent } from './components/statuscomment/statuscomment.component';
import { StatusService } from './services/status.service';
import { KomentarstatusService } from './services/komentarstatus.service';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { NewprofilesService } from './services/newprofiles.service';
import { OneProfileComponent } from './components/one-profile/one-profile.component';
import { OneImagesComponent } from './components/one-images/one-images.component';
import { OneStatusesComponent } from './components/one-statuses/one-statuses.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyProfileService } from './services/my-profile.service';
import { MyProfileImagesComponent } from './components/my-profile-images/my-profile-images.component';
import { MyStatusesComponent } from './components/my-statuses/my-statuses.component';
import { RouteGuardService } from './services/route-guard.service';
import { StatusLikeService } from './services/status-like.service';
import { PictureLikeService } from './services/picture-like.service';
import { AddImageComponent } from './components/add-image/add-image.component';
import { SearchComponent } from './components/search/search.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { PictureLikeComponent } from './components/picture-like/picture-like.component';
import { StatusLikesComponent } from './components/status-likes/status-likes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TokenInterceptorService } from './services/token-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    ImgcommentComponent,
    RegisterComponent,
    LoginComponent,
    KomentarimgComponent,
    StatuscommentComponent,
    ProfilesComponent,
    OneProfileComponent,
    OneImagesComponent,
    OneStatusesComponent,
    FileSelectDirective,
    MyProfileComponent,
    MyProfileImagesComponent,
    MyStatusesComponent,
    AddImageComponent,
    SearchComponent,
    SearchResultsComponent,
    PictureLikeComponent,
    StatusLikesComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
