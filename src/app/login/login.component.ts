import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserPermitionsService } from '../shared/user-permitions/user-permitions.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private userPermitionsService:UserPermitionsService,
    private localStorage:LocalStorageService
  ) { }

  ngOnInit() {
  }
  doLogin(username, password){
    let mockGroup ='';
    if(username == 'radig1') mockGroup = 'Radiologista_ADM';
    if(username == 'radig2') mockGroup = 'Residente';
    this.userPermitionsService.registerLoggedUser({
      login: username,
      groups:[mockGroup]
    });
    this.localStorage.store('loggedUser', {
      userInfo: this.userPermitionsService.getLoggedUser(),
      dateTime: new Date()
    });
    this.router.navigate(['/worklist']);
  }
}
