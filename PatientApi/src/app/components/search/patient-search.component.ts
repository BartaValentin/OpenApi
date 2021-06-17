import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/services/patient/model/patient.model';

@Component({
  selector: 'patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
})
export class PatientSearchComponent implements OnInit {

  @Output() informParent = new EventEmitter<string>();

  myControl = new FormControl();
  options: Patient[] = [];

  filteredOptions: Observable<Patient[]>;

  constructor() {}

  ngOnInit(): void { }

  emitParent(name: Event): void {
    const filteredValue = (name.target as HTMLInputElement).value;
    this.informParent.emit(filteredValue);
  }

}