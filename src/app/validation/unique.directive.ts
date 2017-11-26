import { Directive, } from '@angular/core';
import { NG_VALIDATORS,Validator,AbstractControl } from '@angular/forms';
@Directive({
  selector: '[appUnique]',
  providers: [{provide: NG_VALIDATORS, useExisting: UniqueDirective, multi: true}]
})
export class UniqueDirective implements Validator {

  constructor() { }
  validate(c:AbstractControl): {[key: string]: any}{
    var val = c.value as string;
    var regex = /[`~,!.<>;':"/[\]|{}()=_+-]/;
    if(val && regex.test(val)) 
    {
      return {
        "appUnique":true
      }
    }
    
    return null;
  }
}
