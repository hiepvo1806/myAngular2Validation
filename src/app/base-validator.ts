import { Injectable } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
@Injectable()
export class BaseFormValidationService {

    constructor() { }
    protected formErrors: any[] = [];

    public validateForm(formGroup: NgForm, _validationRules: Array<ValidationRule>): ValidationResult {
        var controlName;
        var errorMsgs = [];
        var errorInstance = {};
        _validationRules = this.initValidationRulesIfEmpty(_validationRules);
        var normalRules = _validationRules.filter(p => p.type !== ValidationType.specific);
        var isFormValid:boolean = formGroup.valid;

        for (controlName in formGroup.form.controls) {
            var control = formGroup.form.controls[controlName];
            var controlValid = !control.invalid;
            var errorMsgs = [];
            //var rule = _validationRules.find(p => p.controlName == controlName);

            var specifyRules = _validationRules.filter(p => p.controlName == controlName && p.type == ValidationType.specific);
            specifyRules.forEach(rule => {
                var ruleResult = rule.validator(control.value);
                if(!ruleResult.isValid) {
                    controlValid = false;
                    errorMsgs.push(ruleResult.errorMessage);
                }
            });
            //normal rules
            for (var errorKey in control.errors) {
                var normalRule = normalRules.find(p => p.errorKey == errorKey);
                if (normalRule !== undefined && normalRule !== null) {
                    errorMsgs.push(normalRule.errorMessage);
                }
            }
            
            isFormValid = isFormValid && controlValid;
            if(!controlValid) errorInstance[controlName] = errorMsgs.join(",");
        }
        return {
            isValid: isFormValid,
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
    type?:ValidationType;
    controlName?: string;
    errorMessage: string;
    validator?(val: any): ValidationFunctionResult;
    errorKey?: string;
}

export enum ValidationType {
    all,
    specific
}

export class ValidationResult {
    isValid: boolean;
    errors: any;
}

export class ValidationFunctionResult {
    isValid: boolean;
    errorMessage: string;
}
