import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  ifAdmin(): Boolean {
    const token = localStorage.getItem('token');
    if(!token){
      return false
    };
    const adminEncrypt = token.split('.')[1];
    const adminDecrypt = JSON.parse(window.atob(adminEncrypt));
    if(adminDecrypt.username == 'admin'){
      return true;
    } else {
      return false;
    }
  }

}
