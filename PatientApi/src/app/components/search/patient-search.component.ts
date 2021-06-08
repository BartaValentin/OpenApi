import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { Patient } from 'src/app/services/patient/model/patient';
import { PatientService } from 'src/app/services/patient/patient.service';


@Component({
  selector: 'patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
})
export class PatientSearchComponent implements OnInit {

  @Output() informParent = new EventEmitter<string>();

  myControl = new FormControl();
  options: Patient[] = [];

  filteredOptions: Observable<Patient[]> | undefined;

  constructor() {}

  ngOnInit(): void { }

  emitParent(name: Event): void {
    const filteredValue = (name.target as HTMLInputElement).value;
    this.informParent.emit(filteredValue);
  }

}