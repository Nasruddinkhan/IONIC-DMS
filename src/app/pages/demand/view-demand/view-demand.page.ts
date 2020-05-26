import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchViewDemandPage } from './search-view-demand/search-view-demand.page';


@Component({
  selector: 'app-view-demand',
  templateUrl: './view-demand.page.html',
  styleUrls: ['./view-demand.page.scss'],
})
export class ViewDemandPage implements OnInit {
  dataReturned: any;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: SearchViewDemandPage
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned.data);
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });

    return await modal.present();
  }
}
