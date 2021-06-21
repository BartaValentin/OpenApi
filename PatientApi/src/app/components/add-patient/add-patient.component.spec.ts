import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { PatientService } from 'src/app/services/patient.service';
import { birthDateValidator } from 'src/app/services/validator/patient.validator';
import { SharedModule } from 'src/shared/shared.module';
import { AddPatientComponent } from './add-patient.component';

class MockPatientService {
  addPatient(): Observable<Object> { return of({}) }
}

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;
  let testPatientService: MockPatientService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPatientComponent],
      imports: [
        SharedModule,
        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: PatientService, useValue: new MockPatientService },
      ],
    })
      .compileComponents();
  });


  beforeEach(() => {
    testPatientService = TestBed.get(PatientService);
    fixture = TestBed.createComponent(AddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  const validForm = new FormGroup({
    name: new FormControl('Valentin', [Validators.required, Validators.maxLength(50)]),
    birthdate: new FormControl(new Date(1999, 10, 9), [Validators.required, birthDateValidator()]),
    sphere: new FormControl(5, [Validators.required, Validators.min(0), Validators.max(15)]),
    cylinder: new FormControl(6, [Validators.required, Validators.min(0), Validators.max(15)]),
    axis: new FormControl(4, [Validators.required, Validators.min(0), Validators.max(15)]),
  });

  it('should call the service if the form is valid', () => {
    const serviceSpy = spyOn(testPatientService, 'addPatient').and.returnValue(of({}));
    component.createPatient(validForm);
    expect(serviceSpy).toHaveBeenCalled();
  });

  it('should get empty error message if form is valid', () => {
    const errorMessage: string = component.getError('', validForm);
    expect(errorMessage).toEqual('')
  });

  it('should get Name required error message if name is empty', () => {
    const form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      birthdate: new FormControl(new Date(1999, 10, 9), [Validators.required, birthDateValidator()]),
      sphere: new FormControl(5, [Validators.required, Validators.min(0), Validators.max(15)]),
      cylinder: new FormControl(6, [Validators.required, Validators.min(0), Validators.max(15)]),
      axis: new FormControl(4, [Validators.required, Validators.min(0), Validators.max(15)]),
    });
    const errorMessage: string = component.getError('name', form);
    expect(errorMessage).toEqual('The name field is required!')
  });


});
