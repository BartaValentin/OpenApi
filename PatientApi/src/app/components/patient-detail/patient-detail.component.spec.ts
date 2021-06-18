import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PatientService } from 'src/app/services/patient.service';
import { SharedModule } from 'src/shared/shared.module';
import { PatientDetailComponent } from './patient-detail.component';

describe('PatientDetailComponent', () => {
  let component: PatientDetailComponent;
  let fixture: ComponentFixture<PatientDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientDetailComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        PatientService
      ],
    })
      .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
