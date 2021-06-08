import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from 'src/app/services/patient/model/patient';
import { PatientService } from 'src/app/services/patient/patient.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  patient_informations: Patient[] = [];
  displayedColumns: string[] = [];
  patients_datasource: any;

  constructor(
    private router: Router,
    private service: PatientService,
    public dialog: MatDialog) {
  }

  @ViewChild(MatSort) sort: MatSort | undefined;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.getPatients();
  }

  parentWillTakeAction(message: string): void {
    const filteredPatients = this.patient_informations.filter((patients: Patient) =>
      patients.name.toLowerCase().startsWith(message),
    );
    this.patients_datasource = new MatTableDataSource(filteredPatients);
  }

  getPatients(): void {
    this.service.getPatients().subscribe(patients => {
      this.patient_informations = patients;
      this.displayedColumns = ['name', 'birthdate', 'sphere', 'cylinder', 'axis', 'edit', 'info', 'delete'];
      this.patients_datasource = new MatTableDataSource(patients);
      this.patients_datasource.sort = this.sort;
      this.patients_datasource.paginator = this.paginator;
    })
  }

  deletePatient(patient: Patient): void {

    if (confirm("Are you sure to delete? Selected Patient: " + patient.name)) {
      this.patient_informations = this.patient_informations.filter(h => h !== patient);
      this.service.deletePatient(patient.id).subscribe();
      this.getPatients();
    }

  }

  newPatient(): void {
    this.router.navigate(['/add']);
  }

  updatePatient(patient: Patient): void {
    console.log(patient);
  }

  patientDetails(patient: Patient): void {
    this.router.navigate(['/details', patient.id]);
  }

}

