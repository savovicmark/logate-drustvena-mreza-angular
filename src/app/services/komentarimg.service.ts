import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class KomentarimgService {


  constructor(private http:HttpClient) { }

  getAllCommentsByPictureId(id: number):Observable<any>{
      return this.http.get<any>('http://localhost:3000/pictureComment', {
        params: new HttpParams().set('pictureId', id.toString())
      } )
  }

}
