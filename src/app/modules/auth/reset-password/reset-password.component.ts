import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm:FormGroup=new FormGroup({
    email:new FormControl("",Validators.email),
  },Validators.required)
  constructor() { }

  ngOnInit(): void {
  }

reset(model:any){
   console.log(model)
}
}
