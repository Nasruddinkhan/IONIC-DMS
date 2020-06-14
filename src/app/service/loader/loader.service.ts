import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor( public loadingController: LoadingController) { }
  show() {
    this.loadingController.create({
      message: 'Please wait...'
    }).then((res) => {
      res.present();
    });
  }
  hide() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed!', res);
    }).catch((error) => {
      console.log('error', error);
    });
  }
}
