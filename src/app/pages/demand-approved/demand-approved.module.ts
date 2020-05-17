import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ApproveExternalHiringPage } from './approve-external-hiring/approve-external-hiring.page';
import { ApproveManualDemandPage } from './approve-manual-demand/approve-manual-demand.page';
import { DemandApprovedPageRoutingModule } from './demand-approved-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      DemandApprovedPageRoutingModule
    ],
    declarations: [ApproveExternalHiringPage, ApproveManualDemandPage]
  })
export class DemandApprovedPageModule {}
