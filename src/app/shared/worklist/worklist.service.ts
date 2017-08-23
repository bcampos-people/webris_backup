import { Injectable } from '@angular/core';
import { Status } from './status.enum';
import { UserProfile } from './user-profiles.enum';
@Injectable()
export class WorklistService {

  constructor() { }

  showAbrirLaudoIcon(status:Status, userProfile:UserProfile){
    if( [1,2,3].indexOf(status) > -1 && [1,2,3,4,5,6].indexOf(userProfile) > -1 ){
      return true;
    }

    return false;
  }

  showDitaFoneIcon(status:Status, userProfile:UserProfile){
    if([1,4].indexOf(status) > -1 && [2,3,4,5,6].indexOf(userProfile) > -1){
      return true;
    }
    return false;
  }

  showAbrirDocumentos(status:Status, userProfile:UserProfile){
    if(status && [1,2,3,4,5,6].indexOf(userProfile) > -1){
      return true;
    }
    return false;
  }

  showAbrirOsirix(status:Status, userProfile:UserProfile){

    if([1,2,3,4].indexOf(status) > -1 && [1,2,3,4,5,6].indexOf(userProfile) > -1){
      return true;
    }
    return false;
  }

}
