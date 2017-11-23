import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
@Injectable()
export class BaseFormValidationService {

    constructor() { }
    protected formErrors: any[] = [];

    public validateForm(formGroup: NgForm, _validationRules: Array<ValidationRule>): ValidationResult {
        let controlName;
        let errorMsgs = [];
        let errorInstance = {};
        _validationRules = this.initValidationRulesIfEmpty(_validationRules);
        for (controlName in formGroup.form.controls) {
            let control = formGroup.form.controls[controlName];
            let rule = _validationRules.find(p => p.controlName == controlName);
            if (rule !== undefined && rule !== null) {
                let ruleResult = rule.validator(control.value);
                if(!ruleResult.isValid) {
                    errorInstance[controlName] =  (errorInstance[controlName] == null ? "" : errorInstance[controlName]) + "," + ruleResult.errorMessage;
                }
            } else {
                errorMsgs = [];
                for (let errorKey in control.errors) {
                    rule = _validationRules.find(p => p.errorKey == errorKey);
                    if (rule !== undefined && rule !== null) {
                        errorMsgs.push(rule.errorMessage);
                    }
                }
                if (errorMsgs.length > 0) {
                    errorInstance[controlName] = errorMsgs.join(",");
                }
            }
        }
        return {
            isValid: formGroup.valid,
            errors: errorInstance
        };
    }

    public initValidationRulesIfEmpty(_validationRules: Array<ValidationRule>): Array<ValidationRule> {
        if (!_validationRules || _validationRules.length == 0) {
            return [
                {
                    errorKey: "required",
                    errorMessage: "This field is required"
                }
            ];
        }
        else return _validationRules;
    }
}


export interface ValidationRule {
    controlName?: string;
    errorMessage: string;
    //validator?(val:any):boolean ;
    validator?(val: any): ValidationFunctionResult;
    errorKey?: string;
}

export class ValidationResult {
    isValid: boolean;
    errors: any;
}

export class ValidationFunctionResult {
    isValid: boolean;
    errorMessage: string;
}
