import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';

@Component({
  selector: 'app-pen-app-manual-request',
  templateUrl: './pen-app-manual-request.page.html',
  styleUrls: ['./pen-app-manual-request.page.scss'],
})
export class PenAppManualRequestPage implements OnInit {

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
    aprovedManualRequest(){
      console.log(this.demandList );
    }
}
