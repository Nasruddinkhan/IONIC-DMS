import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/manual.request.model';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.page.html',
  styleUrls: ['./demand-detail.page.scss'],
})
export class DemandDetailPage implements OnInit {
  employees: Employee[];
  constructor(private activeRoute: ActivatedRoute,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
    console.log(`dismiss controller`);
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('demandID')) {
        return;
      }
      const demandID = paramMap.get('demandID')
      console.log('demandID', demandID);
      // this.popoverCtrl.dismiss();
     });
     this.employees = this.manaulService.getAllManualRequest();
  }
}
