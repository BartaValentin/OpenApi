
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { SharedModule } from 'src/shared/shared.module';
import { UpdatePatientComponent } from './update-patient.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UpdatePatientComponent', () => {
  let component: UpdatePatientComponent;
  let fixture: ComponentFixture<UpdatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientComponent ],
      imports: [ 
        SharedModule,
        HttpClientTestingModule
      ],
      providers: [
        { provide: PatientService},
        { provide: Router },
        { provide: Function },
      ],
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
