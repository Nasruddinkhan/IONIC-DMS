import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newstaffing-sync',
  templateUrl: './newstaffing-sync.page.html',
  styleUrls: ['./newstaffing-sync.page.scss'],
})
export class NewstaffingSyncPage implements OnInit {

  selectedSegment: string ;
  constructor() {
    this.selectedSegment = 'Forecasted Demand Summary';
   }

  ngOnInit() {
  }
  segmentChosen(selectedSegment: string) {
    console.log(selectedSegment);
    this.selectedSegment = selectedSegment;
  }

}
