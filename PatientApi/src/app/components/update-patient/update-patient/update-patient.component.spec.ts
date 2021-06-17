import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/shared/shared.module';
import { UpdatePatientComponent } from './update-patient.component';


describe('UpdatePatientComponent', () => {
  let component: UpdatePatientComponent;
  let fixture: ComponentFixture<UpdatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientComponent ],
      imports: [ SharedModule ]
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
