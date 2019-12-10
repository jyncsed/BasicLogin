import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthGuard } from './guards/auth-guard.service';
import { TestPage2Component } from './test-page2/test-page2.component';
import {RoleGuard} from './guards/role-guard.service';

const routes: Routes = [
  { path: 'test', component: TestPageComponent },

  { path: 'test2', component: TestPage2Component, data: {role: 'Admin'}, canActivate: [AuthGuard, RoleGuard] },
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
