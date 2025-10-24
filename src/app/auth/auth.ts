import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing-module';
import { FishRoutingModule } from '../fish/fish-routing-module';

@Component({
  selector: 'app-auth',
  imports: [RouterModule,AuthRoutingModule,FishRoutingModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth {

}
