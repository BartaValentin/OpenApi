import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientService } from '../patient.service';
import { PatientGuard } from './patient-guard';

describe('PatientGuard', () => {
  let guard: PatientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ 
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: PatientService}
      ]
    });
    guard = TestBed.inject(PatientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
