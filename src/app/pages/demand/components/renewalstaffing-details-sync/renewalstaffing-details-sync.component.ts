import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';

@Component({
  selector: 'app-renewalstaffing-details-sync',
  templateUrl: './renewalstaffing-details-sync.component.html',
  styleUrls: ['./renewalstaffing-details-sync.component.scss'],
})
export class RenewalstaffingDetailsSyncComponent implements OnInit {

  loadedRequest: Employee;
  constructor(private activeRoute: ActivatedRoute,
              private empService: ManualRequestService,
              private router: Router) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('requestID')) {
       return;
     }
     const requestID = paramMap.get('requestID');
     this.loadedRequest = this.empService.getManualRequest(requestID);
    });
  }
}
