import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  id: number;
  username: string;

  constructor() {
    let token = localStorage.getItem('token')
    if(token){
      let encryptData = token.split('.')[1]
      let decryptData = JSON.parse(window.atob(encryptData))
      if(Date.now()/1000 < decryptData.exp){
      this.id = decryptData.id;
      this.username = decryptData.username
      }
    }
   }
}
