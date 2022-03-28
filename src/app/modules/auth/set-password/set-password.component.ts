import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  setPasswordForm:FormGroup=new FormGroup({
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl(null,[Validators.required])
  },{validators:passwordMatchingValidator})
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  setPassword(model:any){
    console.log(model)
     this.router.navigate(["auth/login"])

 }


}

export const passwordMatchingValidator:ValidatorFn=(control:AbstractControl):ValidationErrors | null=>{
    const password=control.get('password')
    const confirmPassword=control.get("confirmPassword");

    return  password ?.value === confirmPassword?.value ?null :{notmatched:true}
}