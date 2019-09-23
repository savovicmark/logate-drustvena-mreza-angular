import { Injectable } from '@angular/core';
import { StatusLike } from '../components/models/statusLike';

@Injectable({
  providedIn: 'root'
})
export class StatusLikeService {

  constructor() { }

  ifMyLike(arr: StatusLike[], id:number):Boolean{
    for(let i=0; i<arr.length; i++){
      if(arr[i].profileId==id){
        return true
      }
    }
    return false
  }


}
