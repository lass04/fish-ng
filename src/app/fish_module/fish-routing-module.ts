import { AddFish } from './add-fish/add-fish';
import { EditFish } from './edit-fish/edit-fish';
import { Fishdetail } from './fishdetail/fishdetail';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFish } from './search-fish/search-fish';


const routes: Routes = [
  {path:"fishdetail/:id",component:Fishdetail},
  {path:"addfish",component:AddFish},
  {path:"editfish/:id",component:EditFish},
  {path:"searchfish",component:SearchFish}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
