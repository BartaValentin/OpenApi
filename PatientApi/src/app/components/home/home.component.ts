import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchedName: string = '';

  constructor(
    private router: Router
   ) {}

  ngOnInit(): void {}

  public newPatient(): void {
    this.router.navigate(['/add']);
  }

  public searchPatientByName(message: string): void {
      this.searchedName = message;
  }

}
