import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveManualDemandPageRoutingModule } from './approve-manual-demand-routing.module';

import { ApproveManualDemandPage } from './approve-manual-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveManualDemandPageRoutingModule
  ],
  declarations: [ApproveManualDemandPage]
})
export class ApproveManualDemandPageModule {}
