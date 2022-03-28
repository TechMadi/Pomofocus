import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    email:new FormControl("",Validators.email),
  },Validators.required)
  isRegistered:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  register(model:any){
    console.log(model)
    this.isRegistered=true;
 }
}
