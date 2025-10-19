import { FishList } from './../fish-list/fish-list';
import { Component } from '@angular/core';
import { FishUnity } from '../fish-list/fish-unity';
import { fishList } from '../fish-list/fishlist-load';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.html',
  styleUrl: './info.css'
})
export class Info {
  fishL : FishUnity[] = fishList;

  ReturnSrc(id:number):string{
    const trouv = this.fishL.find(fish=>fish.id==id);
    if(trouv) return trouv.tunisian_name;
    return "unknown";
  }

}
