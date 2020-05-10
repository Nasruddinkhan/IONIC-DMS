import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualDemandPageRoutingModule } from './manual-demand-routing.module';

import { ManualDemandPage } from './manual-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualDemandPageRoutingModule
  ],
  declarations: [ManualDemandPage]
})
export class ManualDemandPageModule {}
