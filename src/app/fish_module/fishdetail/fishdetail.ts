import { FishUnity } from './../fish-unity';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetFishSvc } from '../get-fish-svc';
import { Router } from '@angular/router';

@Component({
  standalone:false,
  selector: 'app-fishdetail',
  templateUrl: './fishdetail.html',
  styleUrl: './fishdetail.css'
})
export class Fishdetail implements OnInit {

  fish : FishUnity|undefined;

   constructor(private router : Router,private ActRoute: ActivatedRoute,private fishSvc : GetFishSvc){}

  ngOnInit(): void {
   const id : string | null = this.ActRoute.snapshot.paramMap.get('id');
  if(id!=null){
    this.fishSvc.getFishById(+id).subscribe(
      (data)=> this.fish=data,
      (err) => this.router.navigate(['/not_found'])
    );
   }
   
  }



}
