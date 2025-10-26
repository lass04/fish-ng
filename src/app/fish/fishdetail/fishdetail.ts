import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fishList } from '../fish-list/fishlist-load';
import { FishUnity } from '../fish-list/fish-unity';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-fishdetail',
  imports: [RouterModule],
  templateUrl: './fishdetail.html',
  styleUrl: './fishdetail.css'
})
export class Fishdetail implements OnInit {

  FList = fishList;
  fish : FishUnity|undefined;

   constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
   const id : string | null = this.route.snapshot.paramMap.get('id');
  
  if(id!=null){
    this.fish = this.FList.find(ele => ele.id === +id);
   }
  }

}
