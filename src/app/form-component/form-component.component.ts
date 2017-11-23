import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BaseFormValidationService, ValidationRule, ValidationFunctionResult ,ValidationType} from '../base-validator';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  private formData: FormDataModel = new FormDataModel();
  private _validationRules: Array<ValidationRule> = new Array<ValidationRule>();
  private formErrors: any = {};

  constructor(private _validatorService: BaseFormValidationService) {

  }

  ngOnInit() {
    this._validationRules = [{
      errorKey: "required",
      errorMessage: "This field is required"
    },
    {
      controlName: "name",
      type: ValidationType.specific,
      errorMessage: "This field is need to be unique",
      validator: (value: string): ValidationFunctionResult => {
        let nameArr = ["Hiep", "Trung"]
        if (nameArr.indexOf(value)!=-1)
          return {
            isValid: false,
            errorMessage: "This field is need to be unique"
          }
        return {
          isValid: true,
          errorMessage: ""
        };
      }
    }
    ];
  }

  onSubmitForm(formGroup: NgForm) {
    var result = this._validatorService.validateForm(formGroup, this._validationRules);
    if (!result.isValid) {
      this.formErrors = result.errors;
      console.log("invalid", result);
    }
    else console.log("valid!");
  }
}

export class FormDataModel {
  appKey: string;
  name: string;
  description: string;
}

