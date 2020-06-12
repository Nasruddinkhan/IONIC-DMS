import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pen-ext-demands',
  templateUrl: './pen-ext-demands.page.html',
  styleUrls: ['./pen-ext-demands.page.scss'],
})
export class PenExtDemandsPage implements OnInit {
  selectedSegment: string ;
  constructor() {
    this.selectedSegment = 'Hirecraft';
   }
  ngOnInit() {
  }
  segmentChosen(selectedSegment: string) {
    console.log(selectedSegment);
    this.selectedSegment = selectedSegment;
  }
}
