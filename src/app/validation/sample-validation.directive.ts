import { Directive, } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appSampleValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SampleValidationDirective, multi: true }]
})
export class SampleValidationDirective implements Validator {

  constructor() { }
  validate(c: AbstractControl): { [key: string]: any } {
    //if failed return 'key':true
    return null;
  }
}
