import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-copy-view-demand',
  templateUrl:'./copy-view-demand.page.html',
  styleUrls: ['./copy-view-demand.page.scss'],
})
export class CopyViewDemandPage implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(`dismiss controller`);
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('demandID')) {
        return;
      }
      const demandID = paramMap.get('demandID')
      console.log('demandID', demandID);
      // this.popoverCtrl.dismiss();
     });
  }

}
