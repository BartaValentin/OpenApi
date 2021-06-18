import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from 'src/app/services/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'birthdate', 'sphere', 'cylinder', 'axis', 'edit', 'info', 'delete'];

  patients: Patient[] = [];
  datasource: MatTableDataSource<Patient>;

  constructor(
    private router: Router,
    private service: PatientService,
    private snackBar: MatSnackBar) {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.getPatients();
  }

  parentWillTakeAction(message: string): void {
    const filteredPatients: Patient[] = this.patients.filter((patients: Patient) => patients.name.toLowerCase().startsWith(message));
    this.setPaginator(filteredPatients);
  }

  setPaginator(patients: Patient[]): void {
    this.datasource = new MatTableDataSource(patients);
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  getPatients(): void {
    this.service.getPatients().subscribe(patients => {
      this.patients = patients;
      this.setPaginator(this.patients);
    }, (error) => {
      console.log(error);
    })
  }

  deletePatient(patientDetails: Patient): void {
    if (confirm("Are you sure to delete? Selected Patient: " + patientDetails.name)) {
      const deletedPatientIndex = this.patients.findIndex(patient => patient.id === patientDetails.id);
      this.patients.splice(deletedPatientIndex,1);
      this.setPaginator(this.patients);
      this.service.deletePatient( { id: patientDetails.id }).subscribe(() => {
        this.succesDelete(patientDetails.name);
      }, (error) => {
        console.log(error);
      });
    }
  }

  succesDelete(name: string): void {
    this.snackBar.open('Successful delete', `Patient: ${name}`, {
      duration: 2500,
    });
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
