import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rej-ext-demands',
  templateUrl: './rej-ext-demands.page.html',
  styleUrls: ['./rej-ext-demands.page.scss'],
})
export class RejExtDemandsPage implements OnInit {

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
