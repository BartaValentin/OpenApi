import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'birthDate'
})
export class BirthDatePipe implements PipeTransform {
 
  transform(value: Date): string {
    const age = this.calculateAge(value.toString());
    const formattedDate = this.formatDate(value);
    if(age > 65) {
      return `(retired) ${formattedDate}`;
    }
    return formattedDate;
  }
 
  calculateAge = (dateString: string): number => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
 
  formatDate = (date: Date): string => {
    const d: Date = new Date(date);
    const year: number = d.getFullYear();
    let month: string = `${d.getMonth() + 1}`;
    let day: string = `${d.getDate()}`;
 
      if (month.length < 2) 
          month = '0' + month;
 
      if (day.length < 2) 
          day = '0' + day;
 
    return [year, month, day].join('-');
}
 
}

