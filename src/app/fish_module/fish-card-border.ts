import { Directive, ElementRef ,HostListener} from '@angular/core';

@Directive({
  selector: '[FishCardBorder]',
  standalone:false,
})
export class FishCardBorder {

  constructor(private ele : ElementRef) { 
    this.setBorder('black',0);
    this.setHeight('350px');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#1E3A8A',4);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('black',0);
  }

  setBorder(color:string,px:number){
    this.ele.nativeElement.style.border=`${px}px solid ${color}`;
  }

  setHeight(height:string){
    this.ele.nativeElement.style.height=height;
  }

}
