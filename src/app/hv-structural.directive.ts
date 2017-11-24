import { Directive ,TemplateRef , ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appHvStructural]'
})
export class HvStructuralDirective {

  constructor(private _templateRef:TemplateRef<any>, private _viewContainerRef:ViewContainerRef) { 
    console.log("_template ref",this._templateRef);
    console.log("view container ref",this._viewContainerRef);
  
    this._viewContainerRef.createEmbeddedView(this._templateRef);
  }


}
