import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';
import { Employee } from '../../model/manual.request.model';

@Component({
  selector: 'app-demand-popup',
  templateUrl: './demand-popup.component.html',
  styleUrls: ['./demand-popup.component.scss'],
})
export class DemandPopupComponent implements OnInit {
  employees: Employee[];
  constructor(public modalController: ModalController,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

  async closeDemandModal() {
    await this.modalController.dismiss();
  }

  async closeDemandModalWithData(obj) {
    await this.modalController.dismiss(obj);
  }
}
