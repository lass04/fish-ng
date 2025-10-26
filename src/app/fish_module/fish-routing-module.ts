import { Fishdetail } from './fishdetail/fishdetail';
import { Home } from './home/home';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"fishdetail/:id",component:Fishdetail}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FishRoutingModule { }
