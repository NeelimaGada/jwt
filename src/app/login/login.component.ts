import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  constructor(private fb: FormBuilder,private s:MainService,private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
}
  get f() { return this.loginForm.controls; }
  logdata;
  token;
  onSubmit(login) {
    // this.submitted = true;
    // this.loading = true;
     this.s.login_user(login).subscribe(resp=>{
      localStorage.setItem('token',resp['result']['token']);
       this.logdata = resp;
       console.log('login data',login)
       console.log('res', this.logdata)
   
         if(this.logdata.username== this.loginForm.value.username && this.logdata.password== this.loginForm.value.password) {
         
          //  localStorage.setItem('token',this.logdata['result']['token']);
         }
         
     this.token=localStorage.getItem('token')
     console.log(this.token)
     this.router.navigate(['dashboard']);
     })
   
    // this.s.login_user(this.loginForm.value,a).subscribe(resp=>{
   
    // })
    // if (this.loginForm.invalid) {
    //     return;
    // }
    // this.s.login_user(this.loginForm.value).subscribe(res=>{
    //   console.log(res)
    // })
}
}
