import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManualRequestService } from 'src/app/service/manual-request/manual-request.service';
import { Employee } from '../../model/manual.request.model';

@Component({
  selector: 'app-request-popup',
  templateUrl: './request-popup.component.html',
  styleUrls: ['./request-popup.component.scss'],
})
export class RequestPopupComponent implements OnInit {
  employees: Employee[];
  constructor(public modalController: ModalController,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

  async closeRequestModal() {
    await this.modalController.dismiss();
  }

  async closeRequestModalWithData(obj) {
    await this.modalController.dismiss(obj);
  }
}
