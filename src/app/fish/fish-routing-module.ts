import { Fishdetail } from './fishdetail/fishdetail';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FishList } from './fish-list/fish-list';

const routes: Routes = [
  {path:"fishdetail/:id",component:Fishdetail},
  {path:"List",component:FishList}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
