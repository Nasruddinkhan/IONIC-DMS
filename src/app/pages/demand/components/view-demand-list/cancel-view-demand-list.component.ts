import { Component, Input } from '@angular/core';
import { Employee } from '../../model/manual.request.model';

@Component({
    selector: 'cancel-vews-demand-list',
    templateUrl: './cancel-view-demand-list.component.html'
})
export class CancelViewDemandComponent{
@Input()
emp: Employee;
}