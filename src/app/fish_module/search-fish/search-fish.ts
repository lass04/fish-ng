import { GetFishSvc } from './../get-fish-svc';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { FishUnity } from '../fish-unity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-fish',
  standalone : false,
  templateUrl: './search-fish.html',
  styleUrl: './search-fish.css'
})
export class SearchFish implements OnInit{

  searchSubject = new Subject<string>();
  fishs$!:Observable<FishUnity[]>

  constructor(private router:Router,private fishSvc:GetFishSvc){}

  ngOnInit(){
    this.fishs$ = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term)=>this.fishSvc.getFishByKeyword(term))
    )
  }

  search(term:string){
    this.searchSubject.next(term);
  }

  goToDetail(fish:FishUnity){
     this.router.navigate([`/fish/fishdetail/${fish.id}`]);
  }
    
}
