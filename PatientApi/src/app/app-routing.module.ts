import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from './components/add-patient/add-patient/add-patient.component';

import { PatientDetailComponent } from './components/detail/patient-detail/patient-detail.component';
import { HomeComponent } from './components/home/home.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient/update-patient.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: PatientDetailComponent },
  { path: 'add', component: AddPatientComponent },
  { path: 'update/:id', component: UpdatePatientComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
