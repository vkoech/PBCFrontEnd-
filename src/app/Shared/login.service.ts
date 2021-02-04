import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  formData:Login = new Login();
  readonly baseURL =""

  constructor(private http:HttpClient) { }

  postLogin(){
    return this.http.post(this.baseURL,this.formData);
  }

}
