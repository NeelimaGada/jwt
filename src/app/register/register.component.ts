import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../main.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,private s:MainService
      ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          mobileno: ['', Validators.required],
          email: ['', [Validators.required,Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          role:['',Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
 this.s.register(this.registerForm.value).subscribe(resp=>{
     console.log(resp);
  //    alert("inserted");
 })
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;

      }
    

     
  }
}

