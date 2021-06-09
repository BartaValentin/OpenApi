import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeletePatientDTO } from 'src/app/services/patient/model/patient';
import { Patient, PatientDetails } from 'src/app/services/patient/model/patient.model';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patient_informations: PatientDetails[] = [];
  displayedColumns: string[] = [];
  patients_datasource: any;

  constructor(
    private router: Router,
    private service: PatientService) {
  }

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.getPatients();
  }

  parentWillTakeAction(message: string): void {
    const filteredPatients: PatientDetails[] = this.patient_informations.filter((patients: PatientDetails) => patients.name.toLowerCase().startsWith(message));
    this.setPaginator(filteredPatients);
  }

  setPaginator(patients: PatientDetails[]): void {
    this.displayedColumns = ['name', 'birthdate', 'sphere', 'cylinder', 'axis', 'edit', 'info', 'delete'];
    this.patients_datasource = new MatTableDataSource(patients);
    this.patients_datasource.sort = this.sort;
    this.patients_datasource.paginator = this.paginator;
  }

  getPatients(): void {
    this.service.getPatients().subscribe(patients => {
      this.patient_informations = patients;
      this.setPaginator(patients);
    })
  }

  deletePatient(patient: PatientDetails): void {
    if (confirm("Are you sure to delete? Selected Patient: " + patient.name)) {
      const id: DeletePatientDTO = { id: patient.id };
      this.patient_informations = this.patient_informations.filter(h => h !== patient);
      this.service.deletePatient(id).subscribe();
      this.getPatients();
    }
  }

  newPatient(): void {
    this.router.navigate(['/add']);
  }

  updatePatient(patient: Patient): void {
    this.router.navigate(['/update', patient.id]);
  }

  patientDetails(patient: Patient): void {
    this.router.navigate(['/details', patient.id]);
  }

}

