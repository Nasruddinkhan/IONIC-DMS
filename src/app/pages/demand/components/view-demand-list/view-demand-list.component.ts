import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/manual.request.model';
import { PopoverController } from '@ionic/angular';
import { PopupViewMenuListComponent } from './view-popup-menu-list ';

@Component({
  selector: 'app-view-demand-list',
  templateUrl: './view-demand-list.component.html',
  styleUrls: ['./view-demand-list.component.scss'],
})
export class ViewDemandListComponent implements OnInit {
  @Input() viewdemandsObj: Employee;
  constructor(private popoverCtrl: PopoverController) { }
  ngOnInit() {}

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
        component: PopupViewMenuListComponent,
        event: ev,
        animated: true,
        showBackdrop: true,
        componentProps: {
          demandID: 123
        }
    });
    return await popover.present();
}
}
