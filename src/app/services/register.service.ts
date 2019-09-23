import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../components/models/profile';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  addProfile(profile : Profile): Observable<any>{
    return this.http.post<any>('http://localhost:3000/register', profile)
  }

  isLogedIn():Boolean{
    let token = localStorage.getItem('token');
    if(!token) return false;
    let encryptData = token.split('.')[1];
    let decryptData = JSON.parse(window.atob(encryptData))
    return Date.now()/1000 < decryptData.exp
  }

  loginUser(profile : Profile): Observable<any>{
    return this.http.post<any>('http://localhost:3000/login', profile)
  }

}
