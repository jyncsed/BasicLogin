import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthGuard } from './guards/auth-guard.service';
import { RoleGuard } from './guards/role-guard.service';
import { TestPage2Component } from './test-page2/test-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestPageComponent,
    TestPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
