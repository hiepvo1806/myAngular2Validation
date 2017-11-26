import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueDirective } from './unique.directive';
import { FormsModule } from '@angular/forms';
import { SampleValidationDirective } from './sample-validation.directive';
import { AsyncGetNameValidatorDirective } from './async-get-name-validator.directive';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [UniqueDirective, SampleValidationDirective, AsyncGetNameValidatorDirective],
  exports: [
    UniqueDirective,
    AsyncGetNameValidatorDirective
  ]
})
export class ValidationModule { }
