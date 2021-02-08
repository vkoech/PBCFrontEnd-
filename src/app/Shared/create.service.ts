import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create } from './create.model';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  formData: Create=new Create();
  readonly baseURL=""

  constructor(private http: HttpClient) { }

  createUser(){
    return this.http.post(this.baseURL,this.formData)
  }
}
