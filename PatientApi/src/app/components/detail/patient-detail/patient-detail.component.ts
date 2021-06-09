
import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/services/patient/model/patient.model';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PatientService,
  ) { }

  ngOnInit(): void {
    this.getPatient();
  }

  getPatient(): void {
    const id = <string>this.route.snapshot.paramMap.get('id');
    this.service.getPatientById(id).subscribe((patient) => this.patient = patient);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

}
