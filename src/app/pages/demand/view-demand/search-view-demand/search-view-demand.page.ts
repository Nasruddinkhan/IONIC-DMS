import { Component, OnInit } from '@angular/core';
import {  ModalController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemandPopupComponent } from '../../components/demand-popup/demand-popup.component';
import { ProjectPopupComponent } from '../../components/project-popup/project-popup.component';

@Component({
  selector: 'app-search-view-demand',
  templateUrl: './search-view-demand.page.html',
  styleUrls: ['./search-view-demand.page.scss'],
})
export class SearchViewDemandPage implements OnInit {

  modalTitle: string;
  modelId: number;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
   /*  this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle; */
    this.ionicForm = this.formBuilder.group({
      demandID: ['', [ Validators.required]],
      oppID: ['', [ Validators.required]],
      projectID: ['', [ Validators.required]],
      skillelement: ['', [Validators.required]],
      requestID: ['', [Validators.required]]
    });
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
      this.isSubmitted = true;
      console.log(this.ionicForm.value);
      if (!this.ionicForm.valid) {
        console.log('Please provide all the required values!');
        return false;
      } else {
        this.closeModalwithFroms();
      }
    }

  async closeModal() {
  //  const onClosedData = 'Wrapped Up!';
    await this.modalController.dismiss();
  }

  async closeModalwithFroms() {
    const onClosedData = this.ionicForm.value;
    await this.modalController.dismiss(onClosedData);
  }
  selectDealID(e) {
   console.log( e.value.pokeIndex);
  }


  async openDemandModal() {
    const searchmodal = await this.modalController.create({
      component: DemandPopupComponent
    });

    searchmodal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned !== null && dataReturned.data !== undefined);
      if (dataReturned !== null && dataReturned.data !== undefined ) {
        console.log('dataReturned', dataReturned.data);
        this.ionicForm.controls.demandID.setValue(dataReturned.data.empID);
      }
    });
    return await searchmodal.present();
  }

  async openDealModal() {
    const searchmodal = await this.modalController.create({
      component: DemandPopupComponent
    });

    searchmodal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned !== null && dataReturned.data !== undefined);
      if (dataReturned !== null && dataReturned.data !== undefined ) {
        console.log('dataReturned', dataReturned.data);
        this.ionicForm.controls.oppID.setValue(dataReturned.data.empID);
      }
    });
    return await searchmodal.present();
  }

  async openSkillEmentModal() {
    const searchmodal = await this.modalController.create({
      component: DemandPopupComponent
    });
    searchmodal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned !== null && dataReturned.data !== undefined);
      if (dataReturned !== null && dataReturned.data !== undefined ) {
        console.log('dataReturned', dataReturned.data);
        this.ionicForm.controls.skillelement.setValue(dataReturned.data.empID);
      }
    });
    return await searchmodal.present();
  }
  async openProjectModal() {
    const searchmodal = await this.modalController.create({
      component: ProjectPopupComponent
    });
    searchmodal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned !== null && dataReturned.data !== undefined);
      if (dataReturned !== null && dataReturned.data !== undefined ) {
        console.log('dataReturned', dataReturned.data);
        this.ionicForm.controls.projectID.setValue(dataReturned.data.empID);
      }
    });
    return await searchmodal.present();
  }
  async openRequestModal() {
    const searchmodal = await this.modalController.create({
      component: ProjectPopupComponent
    });
    searchmodal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned !== null && dataReturned.data !== undefined);
      if (dataReturned !== null && dataReturned.data !== undefined ) {
        console.log('dataReturned', dataReturned.data);
        this.ionicForm.controls.requestID.setValue(dataReturned.data.empID);
      }
    });
    return await searchmodal.present();
  }
}
