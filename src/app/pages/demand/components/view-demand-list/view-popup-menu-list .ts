import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popup-demand-list',
  templateUrl: './view-popup-menu-list.html'
})
export class PopupViewMenuListComponent implements OnInit {
    constructor(private navParams: NavParams,
                private alertCtrl: AlertController,
                private router: Router ){}

    ngOnInit() {
        const demandID = this.navParams.data.demandID;
        console.log('popupover', demandID);
    }
    openViewComponentDetails(){
     console.log('open view component');
     this.presentViewDemandAlert();
    }
    openEditComponentDetails(){
      this.presentEditAlert();
      console.log('open edit component');
     }
     openCancelComponentDetails(){
      console.log('open cancel component');
      this.presentAlert();
     }
     openCopyComponentDetails(){
      console.log('open copy component');
      this.presentCopyAlert();
     }

     async presentAlert() {
      this.alertCtrl.create({
        header: 'Are you sure ?',
        message: 'You want to cancel multiple demand',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
            console.log('are  Yes');
            const demandID = 5000;
            const isChk = true;
            this.router.navigate([`/demand/cancel-view-demand/${demandID}/${isChk}`]);
            }
        },
        {
          text: 'No',
          handler: () => {
            console.log('are  No');
            const demandID = 5000;
            const isChk = false;
            this.router.navigate([`/demand/cancel-view-demand/${demandID}/${isChk}`]);
            }
        }
      ]
      }).then(alertEl => {
        alertEl.present();
      });
    };

    async presentCopyAlert() {
      this.alertCtrl.create({
        header: 'Are you sure ?',
        message: 'You want to copy demand',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
            console.log('are  Yes');
            const demandID = 5000;
            this.router.navigate([`/demand/copy-view-demand/${demandID}`]);
            }
        },
        {
          text: 'No',
          handler: () => {
            console.log('are  No');
            }
        }
      ]
      }).then(alertEl => {
        alertEl.present();
      });
    };

    async presentViewDemandAlert() {
      this.alertCtrl.create({
        header: 'Are you sure ?',
        message: 'You want to view demands',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
            console.log('are  Yes');
            const demandID = 5000;
            this.router.navigate([`/demand/demand-detail/${demandID}`]);
            }
        },
        {
          text: 'No',
          handler: () => {
            console.log('are  No');
            }
        }
      ]
      }).then(alertEl => {
        alertEl.present();
      });
    };

    presentEditAlert(){
      this.alertCtrl.create({
        header: 'Are you sure ?',
        message: 'You want to edit demands',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
            console.log('are  Yes');
            const demandID = 5000;
            this.router.navigate([`/demand/edit-view-demand/${demandID}`]);
            }
        },
        {
          text: 'No',
          handler: () => {
            console.log('are  No');
            }
        }
      ]
      }).then(alertEl => {
        alertEl.present();
      });
    };
}