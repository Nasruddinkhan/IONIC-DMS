import { Component, OnInit } from '@angular/core';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';

@Component({
    selector: 'pen-hirecraft-demand-page',
    templateUrl: './pen-hc-demands.component.html'
})
export class PendingHCDemandPage implements OnInit {

 employees: Employee[];
 constructor(private manaulService: ManualRequestService) { }
 ngOnInit() {
   this.employees = this.manaulService.getAllManualRequest();
 }
}