import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';

@Component({
  selector: 'app-app-ext-hiring-details',
  templateUrl: './app-ext-hiring-details.component.html',
  styleUrls: ['./app-ext-hiring-details.component.scss'],
})
export class AppExtHiringDetailsComponent implements OnInit {
  @Input()
  employeesObj: Employee
  constructor() { }

  ngOnInit() {}

}
