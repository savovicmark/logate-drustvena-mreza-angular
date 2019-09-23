import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PictureLike } from '../components/models/pictureLike';


@Injectable({
  providedIn: 'root'
})
export class PictureLikeService {

  constructor(private http: HttpClient) { }

  getAllImgLikesById(id: number): Observable<any>{
    return this.http.get('http:/localhost:3000/pictureLike', {
      params: new HttpParams().set('pictureId', id.toString())
    })
  }

  
  ifMyLike(arr: PictureLike[], id:number):Boolean{
    for(let i=0; i<arr.length; i++){
      if(arr[i].profileId==id){
        return true
      }
    }
    return false
  }


}
