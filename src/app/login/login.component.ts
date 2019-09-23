import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  LoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      Mail: ['', [Validators.required, Validators.pattern('[sami]')]],
      Password: ['', [Validators.required, Validators.pattern('[hammoussi]')]],
    });
  }


  get s() {
    return this.LoginForm.controls;
  }

  LoginFn() {
    alert('entréééééééééééé');
    this.submitted = true;
    // stop here if form is invalid
    if (this.LoginForm.invalid) {
      return;
    } else {
      this.submitted = false;
      this.router.navigateByUrl('/home');

    }
  }
}




