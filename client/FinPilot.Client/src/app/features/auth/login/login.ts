import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';

import { MATERIAL_MODULES } from '../../../shared/material/material';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ...MATERIAL_MODULES
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  private fb = inject(FormBuilder);

  hidePassword = true;

  loginForm = this.fb.group({

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6)
      ]
    ],

    rememberMe: [false]

  });

}