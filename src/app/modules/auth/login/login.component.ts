import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm:FormGroup=new FormGroup({
  email:new FormControl("",Validators.email),
  password:new FormControl(''),
},Validators.required)
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
login(model:any){
   console.log(model)
 this.router.navigate(['/dashboard/home'])
}
}
