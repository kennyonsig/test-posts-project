import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchPassword } from '../matchpassword.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
        email: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required]),
        repeatPassword: new FormControl(null, [Validators.required])
      },
      { validators: matchPassword });
  }

  signUp() {
    this.router.navigate(['sign-in']).then();
  }
}
