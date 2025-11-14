import { Injectable } from '@angular/core';
import { FishUnity } from './fish-unity';

@Injectable({
  providedIn: 'root'
})
export class BuyService {
   buys:FishUnity[]=[];

   AddBuy(fish:FishUnity){
    this.buys.push(fish);
   }

   getBuys(){
    return this.buys;
   }

   clearBuys(){
    this.buys=[];
   }
}
