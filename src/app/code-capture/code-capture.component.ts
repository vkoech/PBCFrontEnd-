import {HttpClient} from '@angular/common/http';
import {Component, OnInit, Renderer2} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CodeCaptureService} from '../Shared/code-capture.service';


@Component({
  selector: 'app-code-capture',
  templateUrl: './code-capture.component.html',
  styleUrls: ['./code-capture.component.css']
})
export class CodeCaptureComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  constructor(private _renderer: Renderer2, private _http: HttpClient, public service: CodeCaptureService) {
  }

  disabled = true;

  private formSubmitAttempt: boolean;

  ngOnInit(): void {

    const Script = this._renderer.createElement('Script');
    Script.defer = true;
    Script.async = true;
    Script.src = 'https://www.google.com/recaptcha/api.js';
    this._renderer.appendChild(document.body, Script);
  }

  // tslint:disable-next-line:typedef
  resolved(token: any) {
    this.disabled = false;
    this.service.postCodecapture().subscribe(
        res => {

        },
        err => {console.log(err); }
      );

    }
}
