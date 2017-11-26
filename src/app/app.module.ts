import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { BaseFormValidationService } from './base-validator'
import { ValidationModule } from './validation/validation.module';
import { TestDirectiveComponent } from './test-directive/test-directive.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    TestDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ValidationModule,
    ReactiveFormsModule
  ],
  providers: [
    BaseFormValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
