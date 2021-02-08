import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CreateService } from '../Shared/create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public service: CreateService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    this.service.createUser().subscribe(
      res=>{

      },
      err=>{console.log(err);}
    );
  }
}
