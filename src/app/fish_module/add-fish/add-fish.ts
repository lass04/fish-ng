import { FishUnity } from './../fish-unity';
import { Component, OnInit,Input} from '@angular/core';
import { GetFishSvc } from '../get-fish-svc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fish',
  standalone:false,
  templateUrl: './add-fish.html',
  styleUrl: './add-fish.css'
})
export class AddFish implements OnInit{
  
  @Input() fish:string[]=[];
  piece_unity="";
  fishres:FishUnity={id:0,tunisian_name:"",latin_name:"",habitat:"",piece_price:"",picture:""};
  fishL:FishUnity[]=[];

  constructor(private fishSvc : GetFishSvc,private route : Router){}
  ngOnInit(): void {
    this.fish[4]="DT";
    this.fishL=this.fishSvc.getFishList();
  }

  onSubmit(){
    this.fishres.id=this.fishL.length+1;
    this.fishres.tunisian_name=this.fish[0];
    this.fishres.latin_name=this.fish[1];
    this.fishres.habitat=this.fish[3];
    this.fishres.piece_price=this.fish[4]+'/'+this.piece_unity;
    this.fishres.picture=this.fish[2];
    
    this.fishSvc.addFish(this.fishres);
    this.route.navigate(['/']);
  }

}
