import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-ext-demands',
  templateUrl: './app-ext-demands.page.html',
  styleUrls: ['./app-ext-demands.page.scss'],
})
export class AppExtDemandsPage implements OnInit {
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
