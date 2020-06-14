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
    },
    {
      empID: 'MM5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'NN5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'OO5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'PP5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'KK5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'LL5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'MM5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'NN5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'OO5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'PP5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'QQ5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'RR5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'SS5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'UU5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'VV5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'WW5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'XX5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'YY5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'ZZ5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'AA5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'BB5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'CC5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'DD5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'EE5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'FF5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'GG5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'HH5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'II5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'JJ5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'K5050747',
      firstName: 'Jalaluddin khan',
      lastName: 'khan',
      imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/c/cc/Ad-tech_London_2010_%282%29.JPG',
      eatMeal: ['Indian', 'Salad']
    },
    {
      empID: 'L5050747',
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
