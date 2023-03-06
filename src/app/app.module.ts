import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import {PanelModule} from 'primeng/panel';
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {LazyLoadEvent} from 'primeng/api';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {enableProdMode} from '@angular/core';
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserpageComponent,
    AdminpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ButtonModule,
    // RouterModule,
    MenuModule,
    MenubarModule,
    ToolbarModule,
    PanelModule,
    PasswordModule,
    InputTextModule,
    BrowserAnimationsModule,
    TableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
