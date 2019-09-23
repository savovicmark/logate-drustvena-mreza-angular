import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewprofilesService {

  constructor(private http: HttpClient) { }

  getNewProfiles():Observable<any>{
    return this.http.get<any>('http://localhost:3000/profile')
  }

  getOneProfileById(id: number):Observable<any>{
    return this.http.get<any>('http://localhost:3000/profile/oneProfile',{
      params: new HttpParams().set('id', id.toString())
    })
  }

}
