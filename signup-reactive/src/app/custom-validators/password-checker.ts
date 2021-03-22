import { from } from "rxjs";
import { FormGroup } from '@angular/forms'

export function PasswordChecker (controlName: string, compareControlName: string){
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confirmPassword = formGroup.controls[compareControlName];

        if (password.value !== confirmPassword.value) {
            confirmPassword.setErrors({mustMatch: true});
        } else {
            confirmPassword.setErrors(null);
        }
    }
}