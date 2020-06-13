import { Component, OnInit } from '@angular/core';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';

@Component({
    selector: 'pen-skillbay-demand-page',
    templateUrl: './pen-sb-demands.component.html'
})
export class PendingSBDemandPage implements OnInit {
    employees: Employee[];
     constructor(private manaulService: ManualRequestService) { }
     ngOnInit() {
       this.employees = this.manaulService.getAllManualRequest();
     }
}