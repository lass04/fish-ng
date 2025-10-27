import { AddFish } from './add-fish/add-fish';
import { Fishdetail } from './fishdetail/fishdetail';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"fishdetail/:id",component:Fishdetail},
  {path:"addfish",component:AddFish}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
