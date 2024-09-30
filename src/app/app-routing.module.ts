import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './error/internal-server-error/internal-server-error.component';
import { BadRequestComponent } from './error/bad-request/bad-request.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  // { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
	{ path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'not-found',component: NotFoundComponent},
  { path: 'page-not-found',component: PageNotFoundComponent},
  { path: 'bad-request',component: BadRequestComponent},
  { path: 'internal-server-error', component: InternalServerErrorComponent},
  { path: '**', component: InternalServerErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
