import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchViewDemandPage } from './search-view-demand/search-view-demand.page';
import { Employee } from '../model/manual.request.model';
import { ManualRequestService } from '../../../service/manual-request/manual-request.service';


@Component({
  selector: 'app-view-demand',
  templateUrl: './view-demand.page.html',
  styleUrls: ['./view-demand.page.scss'],
})
export class ViewDemandPage implements OnInit {
  dataReturned: any;
  employees: Employee[];
  constructor(public modalController: ModalController,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: SearchViewDemandPage
    });

    modal.onDidDismiss().then((dataReturned) => {

      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        this.employees = this.manaulService.getAllManualRequest();
      }
    });

    return await modal.present();
  }
}
