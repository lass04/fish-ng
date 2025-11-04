import { GetFishSvc } from './../get-fish-svc';
import { FishUnity } from './../fish-unity';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

   inp_val="";
   fishL : FishUnity[]=[];
  constructor(private router : Router,private fishSvc : GetFishSvc){}

  ngOnInit(): void {
    this.fishSvc.getFishList().subscribe((data)=>this.fishL=data);
  }

   goToFish(id:number){
     this.router.navigate(['/fish_module/fishdetail',id]);
   }
   
   Search(name:string){

    this.fishSvc.getFishByTName(name).subscribe(
      (data) => this.router.navigate([`/fishdetail/${data[0].id}`]),
    (err) =>{
      alert('Cannot find '+name);
      this.inp_val="";
    })

    }

  goToAdd(){
    this.router.navigate(['/fish_module/addfish']);
  }

  goToEdit(id:number){
    this.router.navigate(['/fish_module/editfish',id]);
  }

}
