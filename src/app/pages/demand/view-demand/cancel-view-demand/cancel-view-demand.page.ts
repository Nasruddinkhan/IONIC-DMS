import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancel-view-demand',
  templateUrl:'./cancel-view-demand.page.html',
  styleUrls: ['./cancel-view-demand.page.scss'],
})
export class CancelViewDemandPage implements OnInit {
  selectedSegment:string;
  constructor(public popoverCtrl: PopoverController,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedSegment = 'Cancel Demand';
  }
  segmentChosen(selectedSegment: string) {
    console.log(selectedSegment);
    this.selectedSegment = selectedSegment;
  }
}
