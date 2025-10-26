import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fishList } from '../fishlist-load';
import { FishUnity } from '../fish-unity';
import { RouterModule } from '@angular/router';
import { GetFishSvc } from '../get-fish-svc';


@Component({
  selector: 'app-fishdetail',
  imports: [RouterModule],
  templateUrl: './fishdetail.html',
  styleUrl: './fishdetail.css'
})
export class Fishdetail implements OnInit {

  FList = fishList;
  fish : FishUnity|undefined;

   constructor(private route: ActivatedRoute,private fishSvc : GetFishSvc){}

  ngOnInit(): void {
   const id : string | null = this.route.snapshot.paramMap.get('id');
  
  if(id!=null){
    this.fish = this.fishSvc.getFishById(+id);
   }
  }

}
