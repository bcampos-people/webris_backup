import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
interface UserProfile {
  login:string,
  groups:[string]
}
@Injectable()
export class UserPermitionsService {
  loggedUser:UserProfile;

  constructor(
    private localStorage:LocalStorageService
  ) { 
    
    const savedUser = this.localStorage.retrieve('loggedUser');
    if(savedUser && savedUser.userInfo) this.loggedUser = savedUser.userInfo || undefined;
  }

  isADMUser(){
    if(this.loggedUser && this.loggedUser.groups){
      for(let x= 0; x < this.loggedUser.groups.length; x++){
        let g = this.loggedUser.groups[x];
        if(g.toLowerCase().indexOf('adm') > -1){
          return true;
        }
      }
    }
    return false;
  }

  registerLoggedUser(userProfile:UserProfile){
    this.loggedUser = userProfile;
  }

  getLoggedUser(){
    return this.loggedUser;
  }
}
