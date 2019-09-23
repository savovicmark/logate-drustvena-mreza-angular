import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {apiUrl} from './../../environments/environment';
import { Images } from '../components/models/images';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ImgcommentService {

   //apiUrl: string = apiUrl;

  constructor(private http: HttpClient) { }

  getNewImages():Observable<any>{
    return this.http.get<any>('http://localhost:3000/picture')
  }

  getImagesForOneProfile(id:number):Observable<any>{
    return this.http.get<any>('http://localhost:3000/picture/byId', {
      params: new HttpParams().set('id', id.toString())
    })
  }

}
