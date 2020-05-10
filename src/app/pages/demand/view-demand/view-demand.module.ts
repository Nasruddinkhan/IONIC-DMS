import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewDemandPageRoutingModule } from './view-demand-routing.module';

import { ViewDemandPage } from './view-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDemandPageRoutingModule
  ],
  declarations: [ViewDemandPage]
})
export class ViewDemandPageModule {}
