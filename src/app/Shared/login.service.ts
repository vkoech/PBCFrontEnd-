import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly baseURL = 'http//localhost:4200';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  postLogin(value: any){
    // @ts-ignore
    return this.http.post<any>(this.baseURL, {});
  }

}
