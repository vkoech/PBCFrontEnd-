import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateService {


  readonly baseURL = '';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  createUser(value: any){
    return this.http.post(this.baseURL, {});
  }
}
