import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/manual.request.model';


@Component({
  selector: 'app-staffing-sysnc-details',
  templateUrl: './staffing-sysnc-details.component.html'
})
export class StafingSynctDetailsComponent implements OnInit {
  @Input() staffingcastList: Employee;
  constructor() { }

  ngOnInit() {}

}
