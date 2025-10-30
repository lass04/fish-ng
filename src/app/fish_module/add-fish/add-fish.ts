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
  
  @Input() fish!:FishUnity;
  piece_unity="";

  constructor(private fishSvc : GetFishSvc,private route : Router){}
  ngOnInit(): void {
    this.fish.piece_price="DT";
  }

  onSubmit(){

    if(!this.fishSvc.addFish(this.fish)){
      this.route.navigate(['/fish_module/addfish']);
    }else{
    this.fishSvc.addFish(this.fish);
    this.route.navigate(['/']);
        }}        


}
