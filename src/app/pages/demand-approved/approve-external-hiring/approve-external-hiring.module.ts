import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApproveExternalHiringPageRoutingModule } from './approve-external-hiring-routing.module';

import { ApproveExternalHiringPage } from './approve-external-hiring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApproveExternalHiringPageRoutingModule
  ],
  declarations: [ApproveExternalHiringPage]
})
export class ApproveExternalHiringPageModule {}
