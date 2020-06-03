import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.page.html',
  styleUrls: ['./demand-detail.page.scss'],
})
export class DemandDetailPage implements OnInit {

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
