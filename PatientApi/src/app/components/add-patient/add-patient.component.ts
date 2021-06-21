
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreatePatientDTO } from 'src/app/services/model/patient';
import { PatientService } from 'src/app/services/patient.service';
import { birthDateValidator } from 'src/app/services/validator/patient.validator';
import { errorHandler, ErrorType } from '../../services/errorHandler/error';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private service: PatientService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  patientFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
    birthdate: new FormControl('', [Validators.required, birthDateValidator()]),
    sphere: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
    cylinder: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
    axis: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
  });
  patientDto: CreatePatientDTO;

  public createPatient(form: FormGroup): void {
    if (form.valid) {
      this.patientDto = { ...form.value};
      this.service.addPatient(this.patientDto).subscribe(() => {
        this.succesCreate(this.patientDto.name);
      }, (error) => {
          errorHandler(error);
      });
    }
  }

  public getError(errorType: ErrorType, form: FormGroup): string {
    switch (errorType) {
      case 'name':
        if (form.get('name')!.hasError('required')) {
          return 'The name field is required!';
        }
        break;
      case 'birthdate':
        if (form.get('birthdate')!.hasError('required') || form.get('birthdate')!.hasError('invalidBirthdate')) {
          return 'The birthdate field is required and the age must be bigger then 18 and lower then 100!';
        }
        break;
      case 'sphere':
        if (form.get('sphere')!.hasError('required')) {
          return 'The sphere field is required! Min: 0, Max: 15';
        }
        break;
      case 'cylinder':
        if (form.get('cylinder')!.hasError('required')) {
          return 'The cylinder field is required! Min: 0, Max: 15';
        }
        break;
      case 'axis':
        if (form.get('axis')!.hasError('required')) {
          return 'The axis field is required! Min: 0, Max: 15';
        }
        break;
      default:
        return '';
    }
    return '';
  }



  private succesCreate(name: string): void {
    this.snackBar.open('Successful creation', `Patient: ${name}`, {
      duration: 2500,
    });
    this.router.navigate(['/']);
  }

}
