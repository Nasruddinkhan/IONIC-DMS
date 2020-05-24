import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/manual.request.model';


@Component({
  selector: 'app-manual-request-details',
  templateUrl: './manual-request-details.component.html'
})
export class ManualRequestDetailsComponent implements OnInit {
  @Input() forecastList: Employee;
  constructor() { }

  ngOnInit() {}

}
