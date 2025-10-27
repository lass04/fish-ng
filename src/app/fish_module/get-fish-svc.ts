import { Injectable } from '@angular/core';
import { fishList } from './fishlist-load';
import { FishUnity } from './fish-unity';

@Injectable({
  providedIn: 'root'
})

export class GetFishSvc {
     FishL = fishList;

     getFishList() : FishUnity[]{
        return this.FishL;
     }
     
     getFishById(id:number) : FishUnity | undefined{
      return this.FishL.find(ele=>ele.id===id);
     }

     getFishByTName(name :string):FishUnity | undefined{
      return this.FishL.find(ele=>ele.tunisian_name.toLowerCase()==name.toLowerCase());
     }

     addFish(fish:FishUnity){
         this.FishL.push(fish);
     }

}
