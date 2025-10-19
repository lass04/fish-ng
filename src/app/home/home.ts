import { Component } from '@angular/core';
import { FishRoutingModule } from "../fish/fish-routing-module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FishRoutingModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
