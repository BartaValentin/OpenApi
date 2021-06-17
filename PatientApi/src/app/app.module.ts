import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/patient/db/in-memory-data.service';
import { PatientService } from './services/patient/patient.service';
import { PatientSearchComponent } from './components/search/patient-search.component';
import { PatientDetailComponent } from './components/detail/patient-detail/patient-detail.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient/update-patient.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

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
