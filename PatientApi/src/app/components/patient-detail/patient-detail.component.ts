import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { errorHandler } from 'src/app/services/errorHandler/error';
import { Patient } from 'src/app/services/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PatientService,
  ) { }

  ngOnInit(): void {
    this.getPatient();
  }

  public goBack(): void {
    this.router.navigate(['/']);
  }

  private getPatient(): void {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.service.getPatientById(id).subscribe((patient) => {
      this.patient = patient
    }, (error) => {
      errorHandler(error);
    });
  }

}
