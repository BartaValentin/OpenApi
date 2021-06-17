
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CreatePatientDTO } from 'src/app/services/patient/model/patient';
import { PatientService } from 'src/app/services/patient/patient.service';
import { birthDateValidator } from 'src/app/validator/validator';

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

  succesCreate(name: string): void {
    this.snackBar.open('Successful creation', `Patient: ${name}`, {
      duration: 2500,
    });
    this.router.navigate(['/']);
  }

  patientFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    birthdate: new FormControl('', [Validators.required, birthDateValidator()]),
    sphere: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
    cylinder: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
    axis: new FormControl('', [Validators.required, Validators.min(0), Validators.max(15)]),
  });
  patientDto: CreatePatientDTO;

  createPatient(): void {
    this.patientDto = {
      name: this.patientFormGroup.get('name')!.value,
      birthdate: this.patientFormGroup.get('birthdate')!.value,
      sphere: this.patientFormGroup.get('sphere')!.value,
      cylinder: this.patientFormGroup.get('cylinder')!.value,
      axis: this.patientFormGroup.get('axis')!.value,
    }
    this.service.addPatient(this.patientDto).subscribe(() => {
      this.succesCreate(this.patientDto.name);
    });
  }

  getError(attribute: string): string {
    switch (attribute) {
      case 'name':
        if (this.patientFormGroup.get('name')!.hasError('required')) {
          return 'The name field is required!!';
        }
        break;
      case 'birthdate':
        if (this.patientFormGroup.get('birthdate')!.hasError('required') || this.patientFormGroup.get('birthdate')!.hasError('invalidBirthdate')) {
          return 'The birthdate field is required and the age must be bigger then 18 and lower then 100!';
        }
        break;
      case 'sphere':
        if (this.patientFormGroup.get('sphere')!.hasError('required')) {
          return 'The sphere field is required! Min: 0, Max: 15';
        }
        break;
      case 'cylinder':
        if (this.patientFormGroup.get('cylinder')!.hasError('required')) {
          return 'The cylinder field is required! Min: 0, Max: 15';
        }
        break;
      case 'axis':
        if (this.patientFormGroup.get('axis')!.hasError('required')) {
          return 'The axis field is required! Min: 0, Max: 15';
        }
        break;
      default:
        return '';
    }
    return '';
  }

}
