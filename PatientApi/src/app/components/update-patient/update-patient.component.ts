import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatePatientDTO } from 'src/app/services/model/patient';
import { Patient } from 'src/app/services/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { birthDateValidator } from 'src/app/services/validator/validator';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  patientDto: UpdatePatientDTO;
  patient: Patient;
  patientFormGroup: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private service: PatientService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.service.getPatientById(id).subscribe((patient) => {
      this.patient = patient,
        this.setFormGroup(this.patient)
    });
  }

  setFormGroup(patient: Patient): void {
    this.patientFormGroup = new FormGroup({
      name: new FormControl(patient.name, [Validators.required, Validators.maxLength(50)]),
      birthdate: new FormControl(new Date(patient.birthdate), [Validators.required, birthDateValidator()]),
      sphere: new FormControl(patient.sphere, [Validators.required, Validators.min(0), Validators.max(15)]),
      cylinder: new FormControl(patient.cylinder, [Validators.required, Validators.min(0), Validators.max(15)]),
      axis: new FormControl(patient.axis, [Validators.required, Validators.min(0), Validators.max(15)]),
    })
  }

  succesUpdate(name: string): void {
    this.snackBar.open('Successful modification', `Patient ${name}`, {
      duration: 2500,
    });
    this.router.navigate(['/']);
  }

  updatePatient(): void {

    this.patientDto = {
      id: this.patient.id,
      name: this.patientFormGroup.get('name').value,
      birthdate: this.patientFormGroup.get('birthdate').value,
      sphere: this.patientFormGroup.get('sphere').value,
      cylinder: this.patientFormGroup.get('cylinder').value,
      axis: this.patientFormGroup.get('axis').value,
    }
    this.service.updatePatient(this.patientDto).subscribe(() => {
      this.succesUpdate(this.patient.name);
    });
  }

  getError(attribute: string): string {
    switch (attribute) {
      case 'name':
        if (this.patientFormGroup.get('name').hasError('required')) {
          return 'The name field is required';
        }
        break;
      case 'birthdate':
        if (this.patientFormGroup.get('birthdate').hasError('required')  || this.patientFormGroup.get('birthdate')!.hasError('invalidBirthdate')) {
          return 'The birthdate field is required and the age must be bigger then 18 and lower then 100!';
        }
        break;
      case 'sphere':
        if (this.patientFormGroup.get('sphere').hasError('required')) {
          return 'The sphere field is required Min: 0, Max: 15';
        }
        break;
      case 'cylinder':
        if (this.patientFormGroup.get('cylinder').hasError('required')) {
          return 'The cylinder field is required Min: 0, Max: 15';
        }
        break;
      case 'axis':
        if (this.patientFormGroup.get('axis').hasError('required')) {
          return 'The axis field is required Min: 0, Max: 15';
        }
        break;
      default:
        return '';
    }
    return '';
  }

}
