import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FishRoutingModule } from './fish-routing-module';

import { FishCardBorder } from './fish-card-border';
import { AddFish } from './add-fish/add-fish';
import { Fishdetail } from './fishdetail/fishdetail';
import { Home } from './home/home';
import { EditFish } from './edit-fish/edit-fish';
import { EditButtonBorder } from "./edit-button-border";
import { SearchFish } from './search-fish/search-fish';
import { BuyList } from './buy-list/buy-list';

@NgModule({
  declarations: [
    AddFish,
    Fishdetail,
    Home,
    FishCardBorder,
    EditFish,
    SearchFish,
    BuyList
  ],
  imports: [
    CommonModule,
    FormsModule,
    FishRoutingModule,
    EditButtonBorder
]
})
export class FishModule { }
