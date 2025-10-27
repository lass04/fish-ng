import { FishUnity } from './../fish-unity';
import { Component, OnInit,Input} from '@angular/core';
import { GetFishSvc } from '../get-fish-svc';
import { Router } from '@angular/router';
import { fishList } from '../fishlist-load';

@Component({
  selector: 'app-add-fish',
  standalone:false,
  templateUrl: './add-fish.html',
  styleUrl: './add-fish.css'
})
export class AddFish implements OnInit{
  
  fish:string[]=[];
  piece_unity="";

  fishL : FishUnity[]=[];

  constructor(private fishSvc : GetFishSvc,private route : Router){}
  ngOnInit(): void {
    this.fishL=this.fishSvc.getFishList();
  }


  onSubmit(){
    this.route.navigate(['/']);
  }

}
