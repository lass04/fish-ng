import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing-module';
import { Signup } from './signup/signup';

import { RouterModule } from '@angular/router';
import { Login } from './login/login';
import { authGuardGuard } from '../auth-guard';


@NgModule({
  declarations: [
    Signup,
    Login
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    RouterModule,
    FormsModule,
  ]
})
export class AuthModule { }
