import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { ModalController } from '@ionic/angular';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';

@Component({
  selector: 'app-deal-popup',
  templateUrl: './deal-popup.component.html',
  styleUrls: ['./deal-popup.component.scss'],
})
export class DealPopupComponent implements OnInit {
  employees: Employee[];
  constructor(public modalController: ModalController,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

  async closeOppIDModal() {
    await this.modalController.dismiss();
  }

  async closeOppIDModalWithData(obj) {
    await this.modalController.dismiss(obj);
  }
}
