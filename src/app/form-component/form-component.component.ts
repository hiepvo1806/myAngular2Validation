import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BaseValidator } from '../base-validator';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent extends BaseValidator implements OnInit {
  private formData: FormDataModel = new FormDataModel();
  constructor() {
    super();
  }

  ngOnInit() {
    this._validationRules = [{
      errorKey: "required",
      errorMessage: "This field is required"
    }];
  }

  onSubmitForm(formGroup: NgForm) {
    this.validateForm(formGroup, this.formErrors);
  }
}

export class FormDataModel {
  appKey: string;
  name: string;
  description: string;
}

