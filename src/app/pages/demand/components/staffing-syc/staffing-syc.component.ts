import { Component, OnInit } from '@angular/core';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';
import { Employee } from '../../model/manual.request.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-staffing-syc',
  templateUrl: './staffing-syc.component.html',
  styleUrls: ['./staffing-syc.component.scss'],
})
export class StaffingSycComponent implements OnInit {
  loadedRequest: Employee;
  constructor(private empService: ManualRequestService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
     if (!paramMap.has('demandID')) {
       return;
     }
     const demandID = paramMap.get('demandID');
     this.loadedRequest = this.empService.getManualRequest(demandID);
    });
  }

}
