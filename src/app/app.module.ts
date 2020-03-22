import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginFormComponent } from './components/login-components/login-form/login-form.component';
import { RegisterFormComponent } from './components/login-components/register-form/register-form.component';
import { ForgotPasswordFormComponent } from './components/login-components/forgot-password-form/forgot-password-form.component';
import { ResetPasswordFormComponent } from './components/login-components/reset-password-form/reset-password-form.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { MessageComponent } from './components/login-components/message/message.component';
import { ContractListComponent } from './components/dashboard-components/contract-list/contract-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { SelectedComponentPaneComponent } from './components/selected-component-pane/selected-component-pane.component';
import { ProfileComponent } from './views/profile/profile.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    ResetPasswordFormComponent,
    ResetPasswordComponent,
    MessageComponent,
    ContractListComponent,
    NavbarComponent,
    FilterBarComponent,
    SelectedComponentPaneComponent,
    ProfileComponent,
    UserProfileComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter(){
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:44382'],
        blacklistedRoutes: ['http://localhost:4200/login']
      }
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
