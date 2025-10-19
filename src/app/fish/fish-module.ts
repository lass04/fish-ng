import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FishRoutingModule } from './fish-routing-module';
import { FishList } from './fish-list/fish-list';
import { Info } from './info/info';



@NgModule({
  declarations: [
    FishList,
    Info,
  ],
  imports: [
    CommonModule,
    FishRoutingModule
  ]
})
export class FishModule { }
