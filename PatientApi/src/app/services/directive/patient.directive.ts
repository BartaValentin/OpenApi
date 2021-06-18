import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPatient]'
})
export class PatientDirective implements AfterViewInit {

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    this.setColor(this.element);
  }

  setColor(element: ElementRef) {
     if (Number(element.nativeElement.innerText) === 0) {
      element.nativeElement.style.color = 'red';
    }
  }

}
