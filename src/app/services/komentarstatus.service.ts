import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KomentarstatusService {

  constructor(private http: HttpClient) { }

  getAllCommentsById(id: number):Observable<any>{
    return this.http.get<any>('http://localhost:3000/statusComment', {
      params: new HttpParams().set('statusId', id.toString())
    })
  }

}
