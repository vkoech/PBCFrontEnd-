import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { CreateService } from '../Shared/create.service';
import {ConfirmedValidator} from './confirmed.validator';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm: FormGroup;
  submitted = false;

  constructor(public service: CreateService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
        EmployeeNo: ['', Validators.required],
        Password: ['', [Validators.required, Validators.minLength(8)]],
        ConfirmPassword: ['', Validators.required],
      },
      {
        validator: ConfirmedValidator('Password', 'ConfirmPassword')      }
    );
  }
  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() {  return this.createForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.createForm.value);
    this.service.createUser(this.createForm.value).subscribe(
      response => console.log('Submitted Successfully !!', response),
      error => console.log('Error !!', Error)
    );
    this.submitted = true;

    // stop here if form is invalid
    if (this.createForm.invalid) {
      return;
    }
 }
  // tslint:disable-next-line:typedef
  onReset() {
    this.submitted = false;
    this.createForm.reset();
  }
}
