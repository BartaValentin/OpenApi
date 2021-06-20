import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from 'src/app/services/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  
  @Input() searchedName: string;

  displayedColumns: string[] = ['name', 'birthdate', 'sphere', 'cylinder', 'axis', 'edit', 'info', 'delete'];
  patients: Patient[] = [];
  datasource: MatTableDataSource<Patient>;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private service: PatientService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  public searchPatient(message: string): void {
    const filteredPatients: Patient[] = this.patients.filter((patients: Patient) => patients.name.toLowerCase().startsWith(message));
    this.setPaginator(filteredPatients);
  }

  public deletePatient(patientDetails: Patient): void {
    if (confirm("Are you sure to delete? Selected Patient: " + patientDetails.name)) {
      // const deletedPatientIndex = this.patients.findIndex(patient => patient.id === patientDetails.id);
      // this.patients.splice(deletedPatientIndex,1);
      // this.setPaginator(this.patients);
      this.service.deletePatient({ id: patientDetails.id }).subscribe(() => {
        this.succesDelete(patientDetails.name);
      }, (error) => {
        console.log(error);
      });
    }
  }

  public succesDelete(name: string): void {
    this.snackBar.open('Successful delete', `Patient: ${name}`, {
      duration: 2500,
    });
  }

  public updatePatient(patient: Patient): void {
    this.router.navigate(['/update', patient.id]);
  }

  public patientDetails(patient: Patient): void {
    this.router.navigate(['/details', patient.id]);
  }

  private setPaginator(patients: Patient[]): void {
    this.datasource = new MatTableDataSource(patients);
    this.datasource.sort = this.sort;
    this.datasource.paginator = this.paginator;
  }

  private getPatients(): void {
    this.service.getPatients().subscribe(patients => {
      this.patients = patients;
      this.setPaginator(this.patients);
    }, (error) => {
      console.log(error);
    })
  }

}
