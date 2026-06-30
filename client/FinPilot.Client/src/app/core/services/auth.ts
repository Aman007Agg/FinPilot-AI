import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(request: LoginRequest): Observable<LoginResponse> {

    console.log('Login Request:', request);

    return of({} as LoginResponse);

  }

  logout(): void {

    console.log('User Logged Out');

  }

  isAuthenticated(): boolean {

    return false;

  }

}