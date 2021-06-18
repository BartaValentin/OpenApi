import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CreatePatientDTO, DeletePatientDTO, UpdatePatientDTO } from './model/patient';
import { convertPatientDetails, Patient } from './model/patient.model';

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
      .pipe(
        catchError(this.handleError)
      );
  }

  getPatientById(id: string): Observable<Patient> {
    const url = `${this.patientUrl}/${id}`;
    return this.http.get<Patient>(url).pipe(
      catchError(this.handleError)
    );
  }

  deletePatient(id: DeletePatientDTO): Observable<Patient> {
    const url = `${this.patientUrl}/${id}`;
    return this.http.delete<Patient>(url, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  addPatient(patientDto: CreatePatientDTO): Observable<Patient> {
    const patient = convertPatientDetails(patientDto);
    return this.http.post<Patient>(this.patientUrl, patient, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePatient(patient: UpdatePatientDTO): Observable<any> {
    return this.http.put(this.patientUrl, patient, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    console.log(errorMessage);

    return throwError(errorMessage);
  }

}

