import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CreateComponent} from './create/create.component';
import {CodeCapture} from './Shared/code-capture.model';
import {CodeCaptureComponent} from './code-capture/code-capture.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'resetPassword', component: CodeCaptureComponent },
  {path: 'createAccount', component: CreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
