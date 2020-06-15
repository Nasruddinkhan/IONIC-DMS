import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';
import { PendingDemands } from '../../model/pending-demands';

@Component({
  selector: 'app-manual-request-det',
  templateUrl: './manual-request-det.component.html',
  styleUrls: ['./manual-request-det.component.scss'],
})
export class ManualRequestDetComponent implements OnInit {

  @Input()
  employeesObj: Employee;
  @Output()
  returnObj : EventEmitter<PendingDemands> = new EventEmitter();
  penDemands: PendingDemands;
  constructor() { }
  ngOnInit() {}

  onChange(demandID : string, checked: boolean){
    console.table(demandID, checked);
    this.penDemands = new PendingDemands();
    this.penDemands.demandID = demandID;
    this.penDemands.isCheck = checked;
    this.returnObj.emit(this.penDemands);
  }

}
