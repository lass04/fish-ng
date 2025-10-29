import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { Home } from './fish_module/home/home';

export const routes: Routes = [
    {path:"auth",loadChildren: () => import('./auth_module/auth-module').then(m => m.AuthModule)},
    {path:"",component:Home},
    {path:"fish_module",loadChildren: () => import('./fish_module/fish-module').then(m=>m.FishModule)},
    {path:"**",component:NotFound}
    
];
