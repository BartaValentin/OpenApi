import { ElementRef } from '@angular/core';
import { PatientDirective } from './patient.directive';

describe('PatientDirective', () => {
  it('should create an instance', () => {
    const element: ElementRef = null;
    const directive = new PatientDirective(element);
    expect(directive).toBeTruthy();
  });
});
