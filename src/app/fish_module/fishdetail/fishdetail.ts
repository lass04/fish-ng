import { FishUnity } from './../fish-unity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fishList } from '../fishlist-load';
import { GetFishSvc } from '../get-fish-svc';


@Component({
  standalone:false,
  selector: 'app-fishdetail',
  templateUrl: './fishdetail.html',
  styleUrl: './fishdetail.css'
})
export class Fishdetail implements OnInit {

  fish : FishUnity|undefined;

   constructor(private route: ActivatedRoute,private fishSvc : GetFishSvc){}

  ngOnInit(): void {
   const id : string | null = this.route.snapshot.paramMap.get('id');
  if(id!=null){
    this.fish = this.fishSvc.getFishById(+id);
   }
  }

}
