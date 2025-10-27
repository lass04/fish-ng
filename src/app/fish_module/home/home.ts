import { FishUnity } from './../fish-unity';
import { Component, OnInit } from '@angular/core';
import { FishCardBorder } from '../fish-card-border';
import { Router } from '@angular/router';
import { GetFishSvc } from '../get-fish-svc';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

   inp_val="";
   fishL : FishUnity[]=[];
  constructor(private router : Router,private fishsvc : GetFishSvc){}

  ngOnInit(): void {
    this.fishL = this.fishsvc.getFishList();
    
  }

   goToFish(id:number){
     this.router.navigate(['/fish_module/fishdetail',id]);
   }
   
   id:number|undefined=-1;

   Search(name:string){
    this.id =this.fishsvc.getFishByTName(name)?.id;
    if(this.id!=undefined){
      this.router.navigate(['/fish_module/fishdetail/',this.id]);
   }else{
    this.router.navigate(['/not_found']);
   }
}

  goToAdd(){
    this.router.navigate(['/fish_module/addfish']);
  }
}
