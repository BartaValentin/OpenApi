export interface CreatePatientDTO {
    name: string,
    birthdate: Date,
    sphere: number,
    cylinder: number,
    axis: number
}

export interface UpdatePatientDTO {
    id: string,
    name: string,
    birthdate: Date,
    sphere: number,
    cylinder: number,
    axis: number
}

export interface DeletePatientDTO {
    id: string
}