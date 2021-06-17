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
