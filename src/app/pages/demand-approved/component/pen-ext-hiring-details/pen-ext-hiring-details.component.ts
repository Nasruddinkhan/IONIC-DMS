import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { Employee } from 'src/app/pages/demand/model/manual.request.model';
import { PendingDemands } from '../../model/pending-demands';

@Component({
  selector: 'app-pen-ext-hiring-details',
  templateUrl: './pen-ext-hiring-details.component.html',
  styleUrls: ['./pen-ext-hiring-details.component.scss'],
})
export class PenExtHiringDetailsComponent implements OnInit {
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
