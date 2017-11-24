import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BaseFormValidationService } from './base-validator';
import { HvValidatorDirective } from './hv-validator.directive';
import { HvStructuralDirective } from './hv-structural.directive'

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    HvValidatorDirective,
    HvStructuralDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    BaseFormValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
