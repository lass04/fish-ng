import { FishUnity } from '../fish-unity';
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
  
  fish!:FishUnity;
  piece_unity="";

  constructor(private fishSvc : GetFishSvc,private router : Router){
  }
  ngOnInit(): void {
    this.fish.price="DT";
  }

  onSubmit(){

    this.fishSvc.addFish(this.fish).subscribe(
      ()=> this.router.navigate(['/']),
      (err)=>this.router.navigate(['/fish_module/addfish']));
}
    

}
