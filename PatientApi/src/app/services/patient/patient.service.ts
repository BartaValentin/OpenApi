import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of,} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
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
        catchError(this.handleError<Patient[]>('getPatients', []))
      );
  }

  getPatientById(id: string): Observable<Patient> {
    const url = `${this.patientUrl}/${id}`;
    return this.http.get<Patient>(url).pipe(
      catchError(this.handleError<Patient>(`getPatient id=${id}`))
    );
  }

  deletePatient(id: DeletePatientDTO): Observable<Patient> {
    const url = `${this.patientUrl}/${id}`;
    return this.http.delete<Patient>(url, this.httpOptions).pipe(
      catchError(this.handleError<Patient>('deletePatient'))
    );
  }

  addPatient(patientDto: CreatePatientDTO): Observable<Patient> {
    const patient = convertPatientDetails(patientDto);
    return this.http.post<Patient>(this.patientUrl, patient, this.httpOptions).pipe(
      tap((newPatient: Patient) => console.log(`added patient id=${newPatient.id}`)),
      catchError(this.handleError<Patient>('addPatient'))
    );
  }

  updatePatient(patient: UpdatePatientDTO): Observable<void> {
    return this.http.put(this.patientUrl, patient, this.httpOptions).pipe(
      catchError(this.handleError<any>('updatePatient'))
    );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
