import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appBoldText]'
})
export class BoldTextDirective {

  constructor(private elementRef: ElementRef) { }
  
  @Input('appBoldText') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
     this.elementRef.nativeElement.style.fontWeight = 'bold'; 
  }
  @HostListener('mouseleave') onMouseLeave() {
   this.elementRef.nativeElement.style.fontWeight = null; 
  }
  private highlight(color: string) {
   
  }

}
