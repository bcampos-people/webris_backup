import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AlertModule, TabsModule, BsDropdownModule, TooltipModule, ModalModule, DatepickerModule } from 'ngx-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { GenericTableModule } from '@angular-generic-table/core';
import { ColumnSettingsModule } from '@angular-generic-table/column-settings';

import { AppComponent } from './app.component';
import { MainTemplateComponent } from './template/main-template.component';
import { HeaderTemplateComponent } from './template/header/header-template.component';
import { TabsComponent } from './template/tabs/tabs.component';
import { ServerComponent } from './server/server.component';

import { TableComponent } from './table/table.component';
import { CategoryPipe } from './table/category.pipe';
import { OrderByPipe } from './table/orderby.pipe';
import { ResultadoBuscaComponent } from './resultado-busca/resultado-busca.component';
import { StatusComponent } from './table/status/status.component';
import { LoginComponent } from './login/login.component';

import { LaudoComponent } from './laudo/laudo.component';

import { UserPermitionsService } from './shared/user-permitions/user-permitions.service';
// import { LockerModule, Locker, LockerConfig } from 'angular-safeguard';
import {Ng2Webstorage} from 'ngx-webstorage';
import { DitafoneComponent } from './ditafone/ditafone.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryPipe,
    OrderByPipe,
    ServerComponent,
    MainTemplateComponent,
    HeaderTemplateComponent,
    TableComponent,
    TabsComponent,
    ResultadoBuscaComponent,
    StatusComponent,
    LoginComponent,
    LaudoComponent,
    DitafoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxDatatableModule,
    Ng2Webstorage,
    // GenericTableModule,
    // ColumnSettingsModule,
    RouterModule.forRoot([
      {path: 'worklist', component: MainTemplateComponent },
      {path: 'login', component: LoginComponent },
      {path: '', redirectTo: 'login', pathMatch: 'full'}
    ]),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    DatepickerModule.forRoot()
  ],
  providers: [
    
    UserPermitionsService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
