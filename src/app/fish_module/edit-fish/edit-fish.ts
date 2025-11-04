import { GetFishSvc } from './../get-fish-svc';
import { FishUnity } from './../fish-unity';
import { Component, OnInit,Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-fish',
  standalone:false,
  templateUrl: './edit-fish.html',
  styleUrl: './edit-fish.css'
})
export class EditFish implements OnInit{
  
  @Input() fish?:FishUnity;
   piece_unity="";
  constructor(private fishSvc : GetFishSvc,private router : Router,private ActRoute : ActivatedRoute){}

  ngOnInit(): void {

    // à modifier l'affichage du prix

     const id:string | null = this.ActRoute.snapshot.paramMap.get('id');
     if(id!=null)
     this.fishSvc.getFishById(+id).subscribe(
    (data) => this.fish=data,
    (err) => this.router.navigate(['/not_found'])
  );
}
  onSubmit(){

    if(this.fish)
     this.fishSvc.updateFish(this.fish).subscribe(
      () => this.router.navigate(['/']));
     }


    }
