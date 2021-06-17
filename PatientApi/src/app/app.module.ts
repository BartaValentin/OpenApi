import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { PatientService } from './services/patient/patient.service';
import { PatientSearchComponent } from './components/patient-search/patient-search.component';
import { HomeComponent } from './components/home/home.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { BirthDatePipe } from './services/patient/pipe/birthDatePipe';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { InMemoryDataService } from './services/patient/db/in-memory-data-service';

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
    BirthDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    SharedModule,
    HttpClientModule
  ],
  providers: [ PatientService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
