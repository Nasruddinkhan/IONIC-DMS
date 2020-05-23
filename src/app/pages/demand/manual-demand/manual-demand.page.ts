import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-demand',
  templateUrl: './manual-demand.page.html',
  styleUrls: ['./manual-demand.page.scss'],
})
export class ManualDemandPage implements OnInit {
  selectedSegment: string ;
  constructor() {
    this.selectedSegment = 'Manual Demand';
   }

  ngOnInit() {
  }
  segmentChosen(selectedSegment: string) {
    console.log(selectedSegment);
    this.selectedSegment = selectedSegment;
  }
}
