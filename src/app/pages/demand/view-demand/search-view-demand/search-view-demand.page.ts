import { Component, OnInit } from '@angular/core';
import {  ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-view-demand',
  templateUrl: './search-view-demand.page.html',
  styleUrls: ['./search-view-demand.page.scss'],
})
export class SearchViewDemandPage implements OnInit {

  modalTitle: string;
  modelId: number;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
   /*  this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle; */
  }

  async closeModal() {
    const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss(onClosedData);
  }
}
