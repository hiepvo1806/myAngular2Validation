import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BaseFormValidationService } from './base-validator'

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent
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
