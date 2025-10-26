import { Component } from '@angular/core';
import { FishRoutingModule } from "../fish/fish-routing-module";
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from '../auth/auth-routing-module';
import { FishUnity } from '../fish/fish-list/fish-unity';
import { fishList } from '../fish/fish-list/fishlist-load';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FishCardBorder } from '../fish-card-border';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FishRoutingModule,RouterModule,AuthRoutingModule,FormsModule,CommonModule,FishCardBorder],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private router : Router){}

  inp_val="";
  fishL : FishUnity[] = fishList;
  found: FishUnity | undefined= {id:0,habitat:"",tunisian_name:"",latin_name:"",piece_price:"0",picture:""};
  
  Search(search:string){
    
   if(this.found!=undefined)
    this.found.id=0 ;

    if(search=="") {
      return;
    }
    
    this.found = this.fishL.find(ele => (ele.tunisian_name).toLowerCase()==search.toLowerCase());
    if(this.found && this.found.id!=0){
      this.inp_val="";
      alert("Found "+this.found.tunisian_name);
      this.found= {id:0,habitat:"",tunisian_name:"",latin_name:"",piece_price:"0",picture:""};
    }
    else {
      this.inp_val="";
      alert(search+" Not found");
      this.found= {id:0,habitat:"",tunisian_name:"",latin_name:"",piece_price:"0",picture:""};
  }
}
 

   goToFish(id:number){
     this.router.navigate(['/fishdetail',id]);
   }
}
