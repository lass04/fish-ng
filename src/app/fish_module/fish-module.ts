import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FishRoutingModule } from './fish-routing-module';

import { FishCardBorder } from './fish-card-border';
import { AddFish } from './add-fish/add-fish';
import { Fishdetail } from './fishdetail/fishdetail';
import { Home } from './home/home';
import { EditFish } from './edit-fish/edit-fish';

@NgModule({
  declarations: [
    AddFish,
    Fishdetail,
    Home,
    FishCardBorder,
    EditFish
  ],
  imports: [
    CommonModule,
    FormsModule,
    FishRoutingModule
  ]
})
export class FishModule { }
