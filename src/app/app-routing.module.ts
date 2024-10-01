import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
// import { NotFoundComponent } from './shared/not-found/not-found.component';

import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { ServerErrorComponent } from './components/errors/server-error/server-error.component';
import { BadRequestComponent } from './components/errors/bad-request/bad-request.component';
import { TestErrorComponent } from './components/errors/test-error/test-error.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

import { HtmlTableComponent } from './templates/html-table/html-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // {
  //   path: '', runGuardsAndResolvers: 'always', canActivate: [authGuard],
  //   children: [
  //     { path: 'members', component: MemberListComponent },
  //     { path: 'members/:username', component: MemberDetailComponent },
  //     { path : 'member/edit', component : MemberEditComponent},
  //     { path: 'lists', component: ListsComponent },
  //     { path: 'messages', component: MessagesComponent }
  //   ]
  // },

  // { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'html-table', component: HtmlTableComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'test-error', component: TestErrorComponent},
  { path: 'not-found',component: NotFoundComponent},
  { path: 'page-not-found',component: PageNotFoundComponent},
  { path: 'bad-request',component: BadRequestComponent},
  { path: 'internal-server-error', component: ServerErrorComponent},
  { path: '404', component: ServerErrorComponent},
  // { path: '**', component: ServerErrorComponent},
  // { path: '**', component: NotFoundComponent, pathMatch: 'full' }
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
