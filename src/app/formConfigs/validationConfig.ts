import { Validators } from '@angular/forms';
export class ValidationConfig {
    /**
     * @description Form object of login page of sign-in module
     *
     * @static
     * @returns {{ [key: string]: any; }}
     * @memberof ValidationConfig
     */
    static getLoginConfig(): { [key: string]: any; } {
        return {
            email: [null, [Validators.email, Validators.required]],
            password: [null, [Validators.required]],
            keepMeLogin: [true, [Validators.required]]
        };
    }
}
