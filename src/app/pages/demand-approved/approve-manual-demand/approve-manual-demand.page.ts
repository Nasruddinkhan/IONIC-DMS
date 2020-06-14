import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-manual-demand',
  templateUrl: './approve-manual-demand.page.html',
  styleUrls: ['./approve-manual-demand.page.scss'],
})
export class ApproveManualDemandPage implements OnInit {

  selectedSegment: string ;
  constructor() {
    this.selectedSegment = 'Pending Manual Request';
   }
  ngOnInit() {
  }
  segmentChosen(selectedSegment: string) {
    console.log(selectedSegment);
    this.selectedSegment = selectedSegment;
  }
}
