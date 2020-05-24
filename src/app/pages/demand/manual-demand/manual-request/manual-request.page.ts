import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';

@Component({
  selector: 'app-manual-request',
  templateUrl: './manual-request.page.html',
  styleUrls: ['./manual-request.page.scss'],
})
export class ManualRequestPage implements OnInit {
  employees: Employee[];
  constructor(private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

}
