import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/services/patient/model/patient.model';

@Component({
  selector: 'patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.css'],
})
export class PatientSearchComponent implements OnInit {

  @Output() event = new EventEmitter<string>();
  filteredOptions: Observable<Patient[]>;

  constructor() {}

  ngOnInit(): void { }

  emitParent(name: Event): void {
    const filteredValue = (name.target as HTMLInputElement).value;
    this.event.emit(filteredValue);
  }

}