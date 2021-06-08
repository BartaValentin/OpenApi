import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of, throwError as observableThrowError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { CreatePatientDTO, Patient } from './model/patient';

@Injectable()
export class PatientService {

  private patientUrl = 'app/patients';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPatients(): Observable<Patient[]> {
    return this.http
      .get<Patient[]>(this.patientUrl)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getPatientById(id: string): Observable<Patient | undefined> {
    return this.getPatients().pipe(
      map((patient) => patient.find(patient => patient.id === id))
    );
  }

  deletePatient(id: string): Observable<Patient> {
    const url = `${this.patientUrl}/${id}`;
    return this.http.delete<Patient>(url, this.httpOptions).pipe(
      catchError(this.handleError<Patient>('deletePatient'))
    );
  }

  addPatient(patientDto: CreatePatientDTO): Observable<Patient> {
    const patient = this.convertPatientDetails(patientDto);
    return this.http.post<Patient>(this.patientUrl, patient, this.httpOptions).pipe(
      tap((newPatient: Patient) => console.log(`added patient id=${newPatient.id}`)),
      catchError(this.handleError<Patient>('addPatient'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  private convertPatientDetails(patient: CreatePatientDTO): Patient {
    return {
      id: this.generateId(),
      name: patient.name,
      birthdate: this.formatDate(patient.birthdate),
      sphere: patient.sphere,
      cylinder: patient.cylinder,
      axis: patient.axis
    };
  }

  private formatDate(date: Date): string {
    return `${date.getFullYear()}/${date.getMonth()}/${date.getDay()}`;
  }

  private generateId(): string {
    return Guid.create().toString();
  }

}