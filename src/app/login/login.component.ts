import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(form: NgForm){
    this.service.postLogin().subscribe(
      res => {

      },
      err => {console.log(err); }
    );

  }

}
