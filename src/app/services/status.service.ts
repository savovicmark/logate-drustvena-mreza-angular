import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  statuses = [];

  constructor(private http: HttpClient) { }

  getAllStatuses():Observable<any>{

    return this.http.get<any>('http://localhost:3000/status')

  }

  getAllStatusesById(id:number): Observable<any>{
    return this.http.get<any>('http://localhost:3000/status/byId', {
      params : new HttpParams().set('id', id.toString())
    })
  }


}
