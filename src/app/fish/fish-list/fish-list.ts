import { Component} from '@angular/core';
import { fishList } from './fishlist-load';
import { FishUnity } from './fish-unity';

@Component({
  selector: 'app-fish-list',
  standalone: false,
  templateUrl: './fish-list.html',
  styleUrl: './fish-list.css'
})
export class FishList{

  trouv = {
   id: 0,
   tunisian_name: "",
   latin_name:"",
   habitat: "",
   kg_price: "",
   picture: ""
  }
   
   fishL : FishUnity[] = fishList;

   selectbutton(buttonname : string){
    window.alert(`Vous avez cliqué sur le bouton ${buttonname}`);
   }
   
   DisplayImage(id:number):string{
    
     const trouv = this.fishL.find(fish => fish.id==id);
     if(trouv) return trouv.picture;
     return "";
   }



}
