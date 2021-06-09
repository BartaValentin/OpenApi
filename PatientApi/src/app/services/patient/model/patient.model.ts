import { DatePipe } from "@angular/common";
import { Guid } from "guid-typescript";
import { CreatePatientDTO } from "./patient";

export interface Patient {
    id: string,
    name: string,
    birthdate: Date,
    sphere: number,
    cylinder: number,
    axis: number
}

export interface PatientDetails {
    id: string,
    name: string,
    birthdate: string,
    sphere: number,
    cylinder: number,
    axis: number
}

export function convertPatientDetails(patient: CreatePatientDTO): Patient {
    return {
      id: generateId(),
      name: patient.name,
      birthdate: patient.birthdate,
      sphere: patient.sphere,
      cylinder: patient.cylinder,
      axis: patient.axis
    };
  }

  export function generateId(): string {
    return Guid.create().toString();
  }

  export function toPatientDetails(patientResponse: Patient[]): PatientDetails[] {
    return patientResponse.map(toPatient);
  }

  export function toPatient(patient: Patient): PatientDetails {
    const pipe = new DatePipe('en-US');
    return {
      id: patient.id,
      name: patient.name,
      birthdate: pipe.transform(patient.birthdate, 'yyyy.MM.dd'),
      axis: patient.axis,
      cylinder: patient.cylinder,
      sphere: patient.sphere
    };
  }