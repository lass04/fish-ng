import { AddFish } from './add-fish/add-fish';
import { EditFish } from './edit-fish/edit-fish';
import { Fishdetail } from './fishdetail/fishdetail';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFish } from './search-fish/search-fish';
import { authGuardGuard } from '../auth-guard';
import { BuyList } from './buy-list/buy-list';

const routes: Routes = [
  {path:"fishdetail/:id",component:Fishdetail, canActivate : [authGuardGuard]},
  {path:"addfish",component:AddFish},
  {path:"editfish/:id",component:EditFish},
  {path:"searchfish",component:SearchFish},
  {path:"buylist",component:BuyList}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
