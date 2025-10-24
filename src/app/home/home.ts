import { Component } from '@angular/core';
import { FishRoutingModule } from "../fish/fish-routing-module";
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from '../auth/auth-routing-module';
import { FishUnity } from '../fish/fish-list/fish-unity';
import { fishList } from '../fish/fish-list/fishlist-load';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FishRoutingModule,RouterModule,AuthRoutingModule,FormsModule,CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  inp_val="";
  fishL : FishUnity[] = fishList;
  found: FishUnity | undefined= {id:0,habitat:"",tunisian_name:"",latin_name:"",kg_price:0,picture:""};
  
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
      this.found= {id:0,habitat:"",tunisian_name:"",latin_name:"",kg_price:0,picture:""};
    }
    else {
      this.inp_val="";
      alert(search+" Not found");
      this.found= {id:0,habitat:"",tunisian_name:"",latin_name:"",kg_price:0,picture:""};
  }
}
  foundH: string = "";

   onClick(id:number){
    this.foundH = this.fishL.find(ele => ele.id==id)?.tunisian_name || "";
    if(this.foundH!="")
    alert("Ça c'est le poisson "+this.foundH); 
   }
}
