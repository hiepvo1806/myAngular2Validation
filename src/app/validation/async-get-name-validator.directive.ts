import { Directive,forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS,Validator,AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import * as Rx from '../../../node_modules/rxjs';
@Directive({
  selector: '[appAsyncGetName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => AsyncGetNameValidatorDirective) , multi: true}]
})
export class AsyncGetNameValidatorDirective implements Validator {

  constructor(private http: HttpClient) { }
  validate(c:AbstractControl): Observable< {[key: string]: any} >{
    var value = c.value;
    //return this.http.get('http://localhost:3456/api/getName?'+value);

    return Rx.Observable.timer(1000).map(r=>{
      if(value=="hiep")
      return {
        "appAsyncGetName":true
      };
      return {
        "appAsyncGetName":false
      };
    });
  }
}
