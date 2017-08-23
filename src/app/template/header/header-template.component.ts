import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header-template',
    templateUrl: './header-template.component.html'
})
export class HeaderTemplateComponent {
    desc = 'Rede D`or - São Luiz';
    constructor(
        private router:Router,
    ){}
    LogOff(){
        this.router.navigate(['/login']);
    }
}
