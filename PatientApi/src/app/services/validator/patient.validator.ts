import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

function getAge(dateString: string): number {
    const today: Date = new Date();
    const birthDate = new Date(dateString);
    let age: number = today.getFullYear() - birthDate.getFullYear();
    const month: number = today.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export function birthDateValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const birthDate = control.value as string;
        const age = getAge(birthDate);

        if (age < 18 || age > 100) {
            return { 'invalidBirthdate': true };
        }

        return null;
    };
}