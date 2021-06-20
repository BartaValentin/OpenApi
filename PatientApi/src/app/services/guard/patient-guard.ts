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

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<UrlTree> {
    const id: string = <string> route.paramMap.get('id');
    this.service.getPatientById(id).subscribe(() => { },() => { this.router.navigate(['/error']); });
    return true;
  }

}