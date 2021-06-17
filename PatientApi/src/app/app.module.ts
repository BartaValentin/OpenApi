import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { HomeComponent } from './components/home/home.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { InMemoryDataService } from './services/db/in-memory-data-service';
import { BirthDatePipe } from './services/pipe/patient.pipe.';
import { PatientService } from './services/patient.service';
import { ErrorComponent } from './components/error/error.component';
import { PatientGuardService } from './services/guard/patient.guard.service.';

HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)

@NgModule({
  declarations: [
    AppComponent,
    PatientSearchComponent,
    PatientDetailComponent,
    HomeComponent,
    UpdatePatientComponent,
    AddPatientComponent,
    BirthDatePipe,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PatientService,
    PatientGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
