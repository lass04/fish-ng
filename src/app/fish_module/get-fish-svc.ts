import { Injectable } from '@angular/core';
import { fishList } from './fishlist-load';
import { FishUnity } from './fish-unity';

@Injectable({
  providedIn: 'root'
})

export class GetFishSvc {
     FishL = fishList;

     getFishList() : FishUnity[]{
        return [...this.FishL];
     }
     
     getFishById(id:number) : FishUnity | undefined{
      return this.FishL.find(ele=>ele.id===id);
     }

     getFishByTName(name :string):FishUnity | undefined{
      return this.FishL.find(ele=>ele.tunisian_name.toLowerCase()==name.toLowerCase());
     }

     addFish(fish:FishUnity):boolean{
         if(this.getFishByTName(fish.tunisian_name)!=undefined){
         return false;
      }
         else {
            this.FishL.push(fish);
            return true;
         }
     }

     removeFish(fish:FishUnity){
        this.FishL=this.FishL.filter(ele=>ele.id!=fish.id);
     }

     updateFish(fishupd: FishUnity) {
      this.FishL = this.FishL.map(fish =>
         fish.id === fishupd.id ? { ...fish, ...fishupd } : fish
  );
}


}
