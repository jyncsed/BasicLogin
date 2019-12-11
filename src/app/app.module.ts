import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { RoleGuard } from './shared/guards/role-guard.service';
import { TestPage2Component } from './test-page2/test-page2.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/http-interceptors/auth-interceptor';
import { NavigationbarComponent } from './shared/components/navigationbar/navigationbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './shared/services/auth-service.service';
import { LoginModule } from './modules/login/login.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TestPageComponent,
    TestPage2Component,
    NavigationbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LoginModule
  ],
  providers: [AuthGuard, RoleGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
