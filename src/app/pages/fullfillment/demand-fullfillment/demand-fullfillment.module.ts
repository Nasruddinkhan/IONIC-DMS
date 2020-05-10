import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandFullfillmentPageRoutingModule } from './demand-fullfillment-routing.module';

import { DemandFullfillmentPage } from './demand-fullfillment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandFullfillmentPageRoutingModule
  ],
  declarations: [DemandFullfillmentPage]
})
export class DemandFullfillmentPageModule {}
