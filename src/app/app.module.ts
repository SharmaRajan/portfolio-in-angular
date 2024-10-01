import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

import { HtmlTableComponent } from './templates/html-table/html-table.component';
import { RegisterComponent } from './components/register/register.component';
import { MessagesComponent } from './components/messages/messages.component';


import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';
import { TestErrorComponent } from './components/errors/test-error/test-error.component';
import { BadRequestComponent } from './components/errors/bad-request/bad-request.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    BadRequestComponent,
    HtmlTableComponent,
    NavComponent,
    RegisterComponent,
    FooterComponent,
    MessagesComponent,
    NotFoundComponent,
    ServerErrorComponent,
    TestErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    // {provide: HTTP_INTERCEPTORS, useClass : ErrorInterceptor, multi : true},
    // {provide: HTTP_INTERCEPTORS, useClass : JwtInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
