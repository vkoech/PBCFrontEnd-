import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../Shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(public service: LoginService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        EmployeeNo: ['', Validators.required],
        Password: ['', [Validators.required, Validators.minLength(8)]],
      },
    );
  }
  // tslint:disable-next-line:typedef
  get f() {  return this.loginForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.loginForm.value);
    this.service.postLogin(this.loginForm.value)
      .subscribe(
      response => console.log('Login Successfully !!', response),
      error => console.log('Check Employee Number or password !!', Error)
    );
  }

}
