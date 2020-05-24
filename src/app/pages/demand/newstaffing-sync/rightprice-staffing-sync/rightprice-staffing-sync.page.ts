import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';

@Component({
  selector: 'app-rightprice-staffing-sync',
  templateUrl: './rightprice-staffing-sync.page.html',
  styleUrls: ['./rightprice-staffing-sync.page.scss'],
})
export class RightpriceStaffingSyncPage implements OnInit {

  employees: Employee[];
  constructor(private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

}
