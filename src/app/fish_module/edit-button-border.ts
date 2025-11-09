import { Directive, ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appEditButtonBorder]'
})
export class EditButtonBorder {

  constructor(private ele : ElementRef) {
      this.setBorder('none','black','0');
   }

  @HostListener('mouseenter') onMouseEnter(){
     this.setBorder('black','white','4');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder('none','black','0');
  }


  setBorder(col:string,colP:string,px:string){
    this.ele.nativeElement.style=`border:${px}px solid ${col}`;
    this.ele.nativeElement.style=`color:${colP}`;
  }

}
