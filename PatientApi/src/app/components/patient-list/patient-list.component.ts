import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { errorHandler } from 'src/app/services/errorHandler/error';
import { Patient } from 'src/app/services/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'birthdate', 'sphere', 'cylinder', 'axis', 'edit', 'info', 'delete'];
  patients: Patient[] = [];
  datasource: MatTableDataSource<Patient>;
  searchedName = '';
  title: string = 'Patient list';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() set name(name: string) {
    this.searchedName = name;
    this.searchPatientByName(this.searchedName);
  }

  constructor(
    private service: PatientService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  private searchPatientByName(name: string): void {
    const filteredPatients: Patient[] = this.patients.filter((patients: Patient) => patients.name.toLowerCase().includes(name));
    this.setPaginator(filteredPatients);
  }

  public deletePatient(patient: Patient): void {
    if (confirm("Are you sure to delete? Selected Patient: " + patient.name)) {
      this.service.deletePatient({ id: patient.id }).subscribe((patient: Patient) => {
        this.succesDelete();
      }, (error) => {
        errorHandler(error);
      });
    }
  }

  private succesDelete(): void {
    this.snackBar.open('Successful delete', `Patient`, {
      duration: 2500,
    });
    this.getPatients();
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

  public getPatients(): void {
    this.service.getPatients().subscribe((patients: Patient[]) => {
      this.patients = patients.filter((patient) => patient != null);
      this.setPaginator(this.patients);
    }, (error) => {
      errorHandler(error);
    })
  }

}
