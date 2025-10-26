import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Fishdetail } from './fish/fishdetail/fishdetail';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"auth",loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)},
    {path:"fish",loadChildren: () => import('./fish/fish-module').then(m => m.FishModule)},
    {path:"**",component:NotFound}
    
];
