import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniqueDirective } from './unique.directive';
import { FormsModule } from '@angular/forms';
import { SampleValidationDirective } from './sample-validation.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UniqueDirective, SampleValidationDirective],
  exports: [
    UniqueDirective
  ]
})
export class ValidationModule { }
