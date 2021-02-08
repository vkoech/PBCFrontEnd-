import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CodeCapture } from './code-capture.model';

@Injectable({
  providedIn: 'root'
})
export class CodeCaptureService {
  formData: CodeCapture = new CodeCapture();
  readonly baseURL = '';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  postCodecapture(){
    return this.http.post(this.baseURL, this.formData);
  }
}
