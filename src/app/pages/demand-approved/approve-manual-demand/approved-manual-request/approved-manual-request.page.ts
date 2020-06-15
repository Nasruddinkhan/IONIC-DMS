import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';

@Component({
  selector: 'app-approved-manual-request',
  templateUrl: './approved-manual-request.page.html',
  styleUrls: ['./approved-manual-request.page.scss'],
})
export class ApprovedManualRequestPage implements OnInit {

  demandList: any;
  myForm: FormGroup;
  employees: Employee[];
   constructor(private fb: FormBuilder,
    private manaulService: ManualRequestService) { }
   ngOnInit() {
     this.employees = this.manaulService.getAllManualRequest();
     this.myForm = this.fb.group({
      demands: this.fb.array([])
    });
   }
}
