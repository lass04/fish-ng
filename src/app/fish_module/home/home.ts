import { GetFishSvc } from './../get-fish-svc';
import { FishUnity } from './../fish-unity';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth-service';
import { BuyService } from '../buy-service';

@Component({
  selector: 'app-home',
  standalone:false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  @Output() ToSend = new EventEmitter<FishUnity[]>();

  Buys=0;
   inp_val="";
   fishL : FishUnity[]=[];
   Logged:boolean=false;
   Buys_List:FishUnity[]=[];

  constructor(private router : Router,private fishSvc : GetFishSvc,
    private authSvc:AuthService,private BuySvc:BuyService){}

  ngOnInit(): void {
    this.fishSvc.getFishList().subscribe((data)=>this.fishL=data);
    this.Logged=this.authSvc.isLoggedIn;
  
  }

   goToFish(id:number){
     this.router.navigate(['/fish/fishdetail',id]);
   }
   
   goToSearch(){
    this.router.navigate(['/fish/searchfish']);
    }

  goToAdd(){
    this.router.navigate(['/fish/addfish']);
  }

  goToEdit(id:number){
    this.router.navigate(['/fish/editfish',id]);
  }

  logout(){
    this.router.navigate(['/']);
  }

  AddToBuy(fish:FishUnity){
    if(this.BuySvc.getBuys().length>=10)
      alert('Maximum Buy Limit');
    else
      this.Buys+=1;
      this.BuySvc.AddBuy(fish);
  }

  goToBuys(){
    this.router.navigate(['/buylist'])
  }

}
