import { Routes } from '@angular/router';
import { Home } from './home/home';



export const routes: Routes = [
    {path:"",component:Home},
    {path:"fish",loadChildren: () => import('./fish/fish-module').then(m => m.FishModule)}
];
