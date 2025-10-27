import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FishRoutingModule } from './fish-routing-module';

import { FishCardBorder } from './fish-card-border';
import { AddFish } from './add-fish/add-fish';
import { Fishdetail } from './fishdetail/fishdetail';
import { Home } from './home/home';

@NgModule({
  declarations: [
    AddFish,
    Fishdetail,
    Home,
    FishCardBorder
  ],
  imports: [
    CommonModule,
    FormsModule,
    FishRoutingModule
  ]
})
export class FishModule { }
