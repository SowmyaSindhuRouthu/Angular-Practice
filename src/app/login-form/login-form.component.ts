import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutofocusDirective } from '../shared/autofocus.directive';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule,CommonModule,AutofocusDirective],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }

  onLoginSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
    }
    else console.log(this.loginForm);
    
  }

}
