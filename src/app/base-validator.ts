import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
export class BaseValidator {
    protected formErrors: any[] = [];
    protected _validationRules: Array<ValidationRule> = new Array<ValidationRule>();

    public validateForm(formGroup: NgForm, errorInstance: any): boolean {
        let controlName;
        let errorMsgs = [];
        for (let prop in errorInstance) {
            delete errorInstance[prop];
        }
        for (controlName in formGroup.form.controls) {
            let control = formGroup.form.controls[controlName];
            let rule = this._validationRules.find(p => p.controlName == controlName);
            if (rule !== undefined && rule !== null) {
                errorInstance[controlName] = rule.validator(control.value);
            } else {
                errorMsgs = [];
                for (let errorKey in control.errors) {
                    rule = this._validationRules.find(p => p.errorKey == errorKey);
                    if (rule !== undefined && rule !== null) {
                        errorMsgs.push(rule.errorMessage);
                    }
                }
                if (errorMsgs.length > 0) {
                    errorInstance[controlName] = errorMsgs.join(",");
                }
            }
        }
        return formGroup.valid;
    }
}

export interface ValidationRule {
    controlName?: string;
    errorMessage: string;
    validator?: Function;
    errorKey?: string;
}
