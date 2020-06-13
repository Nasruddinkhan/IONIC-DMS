import { Component, OnInit } from '@angular/core';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';

@Component({
    selector: 'rej-hirecraft-demand-page',
    templateUrl: './rej-hc-demands.component.html'
})
export class RejectHCDemandPage implements OnInit {

 employees: Employee[];
  constructor(private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }
}