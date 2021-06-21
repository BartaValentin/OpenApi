import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { PatientService } from '../patient.service';

@Injectable({
  providedIn: 'root'
})
export class PatientGuard implements CanActivate {

  constructor(
    private service: PatientService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean | Promise<UrlTree> {
    const id: string = <string> route.paramMap.get('id');
    
    this.service.getPatientById(id).subscribe((succes) => {
      console.log(succes)
    },(error) => {
      console.log(error)
      this.router.navigate(['/error']);
      return false;
    });

    return true;
  }

}