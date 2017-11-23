import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { BaseFormValidationService, ValidationRule, ValidationFunctionResult, ValidationType } from '../base-validator';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  private formData: FormDataModel = new FormDataModel();
  private _validationRules: Array<ValidationRule> = new Array<ValidationRule>();
  private formErrors: any = {};
  private isShowingInnerError: boolean = true;
  constructor(private _validatorService: BaseFormValidationService) {

  }

  ngOnInit() {
    this._validationRules = [{
      errorKey: "required",
      errorMessage: "This field is required"
    },
    {
      controlName: "all",
      type: ValidationType.specific,
      errorMessage: "This field is contain specific character!",
      validator: (value: string): ValidationFunctionResult => {
        let charArr = ['@', '!', '%'];
        let isValid = true;
        let invalidChar = '';
        if (value && typeof(value)=="string") {
          charArr.forEach(element => {
            isValid = isValid && !(value.indexOf(element) != -1);
          });
        }

        return {
          isValid: isValid,
          detailErrorMessage: `contain specific characters in , ! %`
        };
      }
    },
    {
      controlName: "name",
      type: ValidationType.specific,
      errorMessage: "This field is need to be unique",
      validator: (value: string): ValidationFunctionResult => {
        let nameArr = ["Hiep!", "Trung"];
        let isValid = !(nameArr.indexOf(value) != -1);
        return {
          isValid: isValid,
          detailErrorMessage: "This field can not contain Hiep! & Trung"
        }
      }
    }
    ];
  }

  onSubmitForm(formGroup: NgForm) {
    var result = this._validatorService.validateForm(formGroup, this._validationRules,this.isShowingInnerError);
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

