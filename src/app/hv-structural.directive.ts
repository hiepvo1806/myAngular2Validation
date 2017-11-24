import { Directive ,TemplateRef , ViewContainerRef,HostListener,ElementRef,Input} from '@angular/core';

@Directive({
  selector: 'input[appHvStructural]'
})
export class HvStructuralDirective {
  
 
  constructor(private _templateRef:TemplateRef<any>, private _viewContainerRef:ViewContainerRef,private el: ElementRef) { 
    console.log("_template ref",this._templateRef);
    console.log("view container ref",this._viewContainerRef);
  
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }

  @HostListener('keyup', ['$event'])  onkeyup(e: Event) {
    console.log('keyup');
    console.log("el",this.el);
    console.log("template",this._templateRef);
    console.log("container",this._viewContainerRef);
  }
  
  @Input() set validateContent(content: string) {
    console.log(content);
  }

  private validate(value:any):boolean {
    this._templateRef.elementRef.nativeElement
    return true;
  }

  
}
