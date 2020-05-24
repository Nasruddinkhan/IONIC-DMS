import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/manual.request.model';
import { ManualRequestService } from '../../../service/manual-request/manual-request.service';

@Component({
  selector: 'app-renewalstaffing-sync',
  templateUrl: './renewalstaffing-sync.page.html',
  styleUrls: ['./renewalstaffing-sync.page.scss'],
})
export class RenewalstaffingSyncPage implements OnInit {
  employees: Employee[];
  constructor(private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

}
