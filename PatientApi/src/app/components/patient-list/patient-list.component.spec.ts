import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Patient } from 'src/app/services/model/patient.model';
import { PatientService } from 'src/app/services/patient.service';
import { SharedModule } from 'src/shared/shared.module';
import { PatientListComponent } from './patient-list.component';

// const patients: Patient[] = [
//   { id: 'ae1e0bf9-8cba-470b-97c1-f1cbf333034e', name: 'Valentin', birthdate: new Date(1994, 4, 1), axis: 0, cylinder: 0, sphere: 0 },
//   { id: '40040077-27a4-45bf-b484-49e3db999e40', name: 'Kristóf', birthdate: new Date(1999, 1, 1), axis: 2, cylinder: 0, sphere: 2 },
//   { id: '357776de-a0fa-40c6-bb61-0cbae85dbb86', name: 'Béla', birthdate: new Date(1994, 3, 1), axis: 0, cylinder: 3, sphere: 3 }
// ];

// class MockPatientService { 
//   getPatients(): Patient[] {
//     return patients;
//   }
// }

describe('PatientListComponent', () => {
  let component: PatientListComponent;
  let fixture: ComponentFixture<PatientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientListComponent ],
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        PatientService
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display "Patient List" as headline', () => {
    expect(fixture.nativeElement.querySelector('h3').textContent).toEqual('Patient list');
  });

});