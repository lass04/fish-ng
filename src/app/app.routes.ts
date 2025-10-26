import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Fishdetail } from './fishdetail/fishdetail';

export const routes: Routes = [
    {path : "fishdetail/:id", component : Fishdetail},
    {path:"",component:Home},
    {path:"auth",loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)},
    {path:"fish",loadChildren: () => import('./fish/fish-module').then(m => m.FishModule)},
    
];
