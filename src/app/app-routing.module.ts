import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { TestPage2Component } from './test-page2/test-page2.component';
import {RoleGuard} from './shared/guards/role-guard.service';
import { LoginComponent } from './modules/login/components/login/login.component';

const routes: Routes = [
  // watch placement or else it won't work
  { path: 'test', component: TestPageComponent },
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: 'test', pathMatch: 'full' },

  // pages with roles assigned
  { path: 'test2', component: TestPage2Component, data: {role: 'Admin'}, canActivate: [AuthGuard, RoleGuard] },

  // this should be last
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
