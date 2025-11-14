import { Component, OnInit } from '@angular/core';
import { BuyService } from '../buy-service';
import { FishUnity } from '../fish-unity';
import { GetFishSvc } from '../get-fish-svc';

@Component({
  selector: 'app-buy-list',
  standalone: false,
  templateUrl: './buy-list.html',
  styleUrl: './buy-list.css'
})
export class BuyList implements OnInit{
  
  buyList:FishUnity[]=[];
  AssociativeList:{ [key:string] : number} ={};

  constructor(private BuySvc:BuyService,private FishSvc:GetFishSvc){}
  
  ngOnInit(){
    this.buyList=this.BuySvc.getBuys();
    this.buyList.forEach(num => {
      this.AssociativeList[num.tunisian_name] = (this.AssociativeList[num.tunisian_name] || 0) +1;
    })

  }

  


}
