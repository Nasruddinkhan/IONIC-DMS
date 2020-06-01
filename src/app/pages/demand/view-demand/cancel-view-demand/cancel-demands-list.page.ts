import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';


@Component({
  selector: 'app-cancel-list-demands',
  templateUrl: './cancel-demands-list.page.html'
})
export class CancelDemandsListPage implements OnInit {
  employees: Employee[];
  constructor(private manaulService: ManualRequestService) { }
  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }
}
