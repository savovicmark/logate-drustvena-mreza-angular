import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  myProfile = [];
  oneProfile = [];

  constructor(private http:HttpClient) { }

  ifMyPost(obj, id:number):Boolean{
    if(obj.profileId == id){
      return true
    }
    return false
  }

}
