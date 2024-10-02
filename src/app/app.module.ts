import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { FormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

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
import { IntroductionComponent } from './components/home/introduction/introduction.component';
import { StoryComponent } from './components/home/story/story.component';
import { PersonalComponent } from './components/home/personal/personal.component';
import { CompanyComponent } from './components/home/company/company.component';
import { ServicesComponent } from './components/home/services/services.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { ContactsComponent } from './components/home/contacts/contacts.component';
import { TestHomeComponent } from './components/home/test-home/test-home.component';
import { TestNavComponent } from './components/nav/test-nav/test-nav.component';
import { HomeTestingComponent } from './home-testing/home-testing.component';
import { RajanPicComponent } from './components/svg-images/rajan-pic/rajan-pic.component';

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
    IntroductionComponent,
    StoryComponent,
    PersonalComponent,
    CompanyComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactsComponent,
    TestHomeComponent,
    TestNavComponent,
    HomeTestingComponent,
    RajanPicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FontAwesomeModule,
    BsDropdownModule.forRoot(),
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
