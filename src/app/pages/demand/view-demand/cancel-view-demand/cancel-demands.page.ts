import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cancel-demands',
  templateUrl: './cancel-demands.page.html'
})
export class CancelDemandsPage implements OnInit {
  isMulticheck:string;
  constructor(public popoverCtrl: PopoverController,
  private activeRoute: ActivatedRoute) { }
  ngOnInit() {
    console.log(`dismiss controller`);
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('demandID')) {
        return;
      }
      const demandID = paramMap.get('demandID')
      this.isMulticheck =paramMap.get('isMulticheck');
      console.log('isMulticheck',  this.isMulticheck);
      console.log('demandID', demandID);
      // this.popoverCtrl.dismiss();
     });
  }
  selectDemands(e) {
    const isDisable = e.value !== null ? true : false;
    if ( e.value !== null) {
    const dealID = e.value.pokeIndex;
    console.log(e.value);
    }
  }
}
