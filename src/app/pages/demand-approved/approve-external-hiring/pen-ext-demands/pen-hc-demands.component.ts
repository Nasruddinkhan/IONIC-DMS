import { Component, OnInit } from '@angular/core';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
    selector: 'pen-hirecraft-demand-page',
    templateUrl: './pen-hc-demands.component.html'
})
export class PendingHCDemandPage implements OnInit {
  myForm: FormGroup;
 employees: Employee[];
 demandList: any;
 constructor(private fb: FormBuilder,
            private manaulService: ManualRequestService) { }
 ngOnInit() {
   this.employees = this.manaulService.getAllManualRequest();
   this.myForm = this.fb.group({
    demands: this.fb.array([])
  });
 }
 onChange(e) {
  const demandFormArray = this.myForm.controls.demands as FormArray;
  if(!e.isCheck) {
    demandFormArray.push(new FormControl(e.demandID));
   } else {
    const index = demandFormArray.controls.findIndex(x => x.value === e.demandID)
    demandFormArray.removeAt(index);
   }
   this.demandList = JSON.stringify(demandFormArray.value);
  }
  approvedHCDetails(){
    console.log(this.demandList );
  }
}