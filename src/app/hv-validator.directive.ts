import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHvValidator]'
})
export class HvValidatorDirective {
  @Input() highlightColor: string;
  
  constructor(private el: ElementRef) {
    console.log("current el",el);
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.highlightColor);
    this.highlight('yellow');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
