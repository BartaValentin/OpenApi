import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Patient } from '../model/patient.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const patients: Patient[] = [
      { id: 'ae1e0bf9-8cba-470b-97c1-f1cbf333034e', name: 'Valentin', birthdate: new Date(1994, 4, 1), axis: 1, cylinder: 1, sphere: 1 },
      { id: '40040077-27a4-45bf-b484-49e3db999e40', name: 'Kristóf', birthdate: new Date(1999, 1, 1), axis: 2, cylinder: 2, sphere: 2 },
      { id: '357776de-a0fa-40c6-bb61-0cbae85dbb86', name: 'Béla', birthdate: new Date(1994, 3, 1), axis: 3, cylinder: 3, sphere: 3 },
      { id: 'ca07ec1f-b088-4fd8-b461-08b088907549', name: 'Péter', birthdate: new Date(2000, 10, 1), axis: 4, cylinder: 4, sphere: 4 },
      { id: '19236d88-f0bd-4651-82c9-52817d643c55', name: 'Ferenc', birthdate: new Date(1984, 12, 1), axis: 5, cylinder: 5, sphere: 5 },
      { id: 'b32cb28f-04ee-4c76-9d1a-fa5e28b255ac', name: 'Jóska', birthdate: new Date(1987, 8, 1), axis: 6, cylinder: 6, sphere: 6 },
      { id: 'd73f917d-9ba9-4ca6-b753-337ff07c1cf1', name: 'Nikolett', birthdate: new Date(1966, 7, 1), axis: 7, cylinder: 7, sphere: 7 },
      { id: '86838fef-ac9e-433c-80e8-d73c7e0f79ed', name: 'Sándor', birthdate: new Date(1993, 6, 1), axis: 8, cylinder: 8, sphere: 8 },
      { id: 'a2623e23-9233-44f2-ad7f-aef93fa58173', name: 'Szabolcs', birthdate: new Date(1999, 4, 1), axis: 9, cylinder: 9, sphere: 9 },
      { id: 'f87e794c-e11a-4fd4-b6be-b99bb2662b18', name: 'Kornél', birthdate: new Date(1991, 1, 1), axis: 10, cylinder: 10, sphere: 10 },
      { id: 'd4bfe066-9692-4e46-9ebf-5ce7e15ab2de', name: 'István', birthdate: new Date(2000, 2, 1), axis: 11, cylinder: 11, sphere: 11 },
      { id: '2b70b9b3-c0da-43bf-8840-5b201e43565e', name: 'Dávid', birthdate: new Date(2001, 3, 1), axis: 12, cylinder: 12, sphere: 12 },
      { id: 'b216d7e9-87b2-4da9-ae82-fc5c39fc53f7', name: 'Gergő', birthdate: new Date(1949, 4, 1), axis: 13, cylinder: 13, sphere: 13 },
      { id: 'b7cafb19-13b5-493d-81dc-c72e05ba2438', name: 'Henrik', birthdate: new Date(1974, 8, 1), axis: 14, cylinder: 14, sphere: 14 },
      { id: '9a15c6bf-164b-406e-808d-9b75183101a5', name: 'Levente', birthdate: new Date(1969, 12, 1), axis: 15, cylinder: 15, sphere: 15 },
    ];
    return { patients };
  }
}