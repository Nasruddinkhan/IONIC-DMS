import { Injectable } from '@angular/core';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';

@Injectable({
  providedIn: 'root'
})
export class ManualRequestService {

  employees: Employee[] = [
    {
      empID: 'NK5050747',
      firstName: 'Nasruddin ',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['French Fries', 'Salad']
    },
    {
      empID: 'JK5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    }

  ];
  constructor() { }
  getAllManualRequest() {
    return [...this.employees];
  }
  getManualRequest(empID: string) {
   return {...this.employees.find(emp => {
    return emp.empID === empID;
    })};
  }
 deleteManualRequest(empID: string) {
   this.employees = this.employees.filter(emp => {
    return emp.empID !== empID;
    });
 }
}
