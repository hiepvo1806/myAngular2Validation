import { Component, NgModule, HostListener, Directive,ViewContainerRef,ElementRef,TemplateRef} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@Directive({
  selector: 'input[myOptional]'
})
export class NewInputDirectiveDirective {

  constructor(private _viewContainerRef:ViewContainerRef,private el: ElementRef) { }
  // THIS WILL BE FIRED IF SOMEONE CHANGES THE INPUT
  @HostListener('keyup', ['$event'])
  inputChanged(event) {
    this.loging();
    if (event.target.value) {
     
    }
    else // ADD YOUR CLASS HERE 
    {
     
    }
  }

  loging() {
    console.log("================================================");
    console.log(Date.now());
    //console.log("template",this._templateRef);
    console.log("view container ref",this._viewContainerRef);
    console.log("el",this.el);
  }
}
