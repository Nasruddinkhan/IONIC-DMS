import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/manual.request.model';

@Component({
  selector: 'app-renewal-demand-sync',
  templateUrl: './renewal-demand-component.html',
})
export class RenewalDemandComponent implements OnInit {
  @Input() renwalDemandObj: Employee;
  constructor() { }

  ngOnInit() {}

}
