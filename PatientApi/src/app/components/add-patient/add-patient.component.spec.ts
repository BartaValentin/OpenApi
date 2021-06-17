import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/shared/shared.module';
import { AddPatientComponent } from './add-patient.component';

describe('AddPatientComponent', () => {
  let component: AddPatientComponent;
  let fixture: ComponentFixture<AddPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientComponent ],
      imports: [ SharedModule ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
