import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PatientDetailComponent } from './components/patient-detail/patient-detail.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';
import { PatientGuard } from './services/guard/patient-guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'details/:id', component: PatientDetailComponent },
  { path: 'add', component: AddPatientComponent },
  {
    path: 'update/:id',
    component: UpdatePatientComponent,
    canActivate: [
      PatientGuard
    ]
  },
  { path: 'error', component: ErrorComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
