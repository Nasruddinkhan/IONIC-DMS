import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popup-demand-list',
  templateUrl: './view-popup-menu-list.html'
})
export class PopupViewMenuListComponent implements OnInit {
    constructor(private navParams: NavParams ){}

    ngOnInit() {
        const demandID = this.navParams.data.demandID;
        console.log('popupover', demandID);
    }
}