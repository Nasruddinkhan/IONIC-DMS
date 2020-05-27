import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';
import { Employee } from '../../model/manual.request.model';

@Component({
  selector: 'app-skillelement-popup',
  templateUrl: './skillelement-popup.component.html',
  styleUrls: ['./skillelement-popup.component.scss'],
})
export class SkillelementPopupComponent implements OnInit {
  employees: Employee[];
  constructor(public modalController: ModalController,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

  async closeSkillEmentModal() {
    await this.modalController.dismiss();
  }

  async closeSkillEmentModalWithData(obj) {
    await this.modalController.dismiss(obj);
  }
}
