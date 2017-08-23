import { Component, OnInit } from '@angular/core';
import { UserPermitionsService } from '../shared/user-permitions/user-permitions.service';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import * as moment from 'moment';
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
    nomeHospital;
    versao;
    userName;
    userProfile;
    loggedAtDate;
    loggedAtTime;
    location;
    constructor(
        private UserPermitionsService:UserPermitionsService,
        private localStorage:LocalStorageService
    ){

    }
    ngOnInit(): void {
        let loginData = this.localStorage.retrieve("loggedUser");

        const saveduser = loginData.userInfo;
        const loginDate = moment(loginData.dateTime).format('DD/MM/YYYY');
        const loginTime = moment(loginData.dateTime).format('HH:mm:ss');
        
        this.nomeHospital = 'Hospital 85';
        this.versao       = 'versão 1.4 1541';
        this.userName     = saveduser.login || 'radig1';
        this.userProfile  = saveduser.groups[0] || 'Radiologia_ADM';
        this.loggedAtDate = loginDate || '07/07/2017';
        this.loggedAtTime = loginTime || '16:34:28';
        this.location     = `MacRIS ${this.nomeHospital} (${this.versao}) Bem vindo usuário ${this.userName} / ${this.userProfile}. Logado as ${this.loggedAtTime} do dia ${this.loggedAtDate}`;
    }

}
