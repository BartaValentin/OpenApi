import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { PatientService } from '../patient.service';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {

  constructor(
    private service: PatientService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id: string = <string> route.paramMap.get('id');
    this.service.getPatientById(id).subscribe(() => {
      this.router.navigate([state.url]);
    },(error) => {
      console.log(error),
      this.router.navigate(['/error']);
    });
    return true;
  }

}