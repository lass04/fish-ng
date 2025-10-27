import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing-module';

@Component({
  selector: 'app-auth',
  imports: [RouterModule,AuthRoutingModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {

}
