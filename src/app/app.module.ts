import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BaseFormValidationService } from './base-validator';
import { ValidationComponentComponent } from './validation-component/validation-component.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    ValidationComponentComponent
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
