import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HeaderTitle } from '../../model/header.title.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  constructor( private alertCtrl: AlertController,
               private router: Router ) { }

  @Input() titles: HeaderTitle;

  ngOnInit() {}
  async presentAlert() {
    this.alertCtrl.create({
      header: 'Are you sure ?',
      message: this.titles.msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.router.navigate([this.titles.isRouteURL]);
          }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
