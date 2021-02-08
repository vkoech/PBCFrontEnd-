import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { RecaptchaModule, RecaptchaFormsModule } from "ng-recaptcha";
import { CodeCaptureComponent } from './code-capture/code-capture.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    PasswordResetComponent,
    CodeCaptureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
