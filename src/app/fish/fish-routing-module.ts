
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Info } from './info/info';
import { FishList } from './fish-list/fish-list';

const routes: Routes = [
  {path:"Info",component:Info},
  {path:"List",component:FishList}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
