import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { ModalController } from '@ionic/angular';
import { ManualRequestService } from '../../../../service/manual-request/manual-request.service';

@Component({
  selector: 'app-project-popup',
  templateUrl: './project-popup.component.html',
  styleUrls: ['./project-popup.component.scss'],
})
export class ProjectPopupComponent implements OnInit {
  employees: Employee[];
  constructor(public modalController: ModalController,
              private manaulService: ManualRequestService) { }

  ngOnInit() {
    this.employees = this.manaulService.getAllManualRequest();
  }

  async closeProjectModal() {
    await this.modalController.dismiss();
  }
  async closeProjectModalWithData(obj) {
    await this.modalController.dismiss(obj);
  }
}
