import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ApproveExternalHiringPage } from './approve-external-hiring/approve-external-hiring.page';
import { ApproveManualDemandPage } from './approve-manual-demand/approve-manual-demand.page';
import { DemandApprovedPageRoutingModule } from './demand-approved-routing.module';
import { PenExtDemandsPage } from './approve-external-hiring/pen-ext-demands/pen-ext-demands.page';
import { AppExtDemandsPage } from './approve-external-hiring/app-ext-demands/app-ext-demands.page';
import { RejExtDemandsPage } from './approve-external-hiring/rej-ext-demands/rej-ext-demands.page';
import { RejectHCDemandPage } from './approve-external-hiring/rej-ext-demands/rej-hc-demands.component';
import { RejectSBDemandPage } from './approve-external-hiring/rej-ext-demands/rej-sb-demands.component';
import { PendingHCDemandPage } from './approve-external-hiring/pen-ext-demands/pen-hc-demands.component';
import { PendingSBDemandPage } from './approve-external-hiring/pen-ext-demands/pen-sb-demands.component'
import { ApprovedHCDemandPage } from './approve-external-hiring/app-ext-demands/app-hc-demands.component';
import { ApprovedSBDemandPage } from './approve-external-hiring/app-ext-demands/app-sb-demands.component';
import { AppExtHiringDetailsComponent } from './component/app-ext-hiring-details/app-ext-hiring-details.component';
import { PenExtHiringDetailsComponent } from './component/pen-ext-hiring-details/pen-ext-hiring-details.component';
import { ApprovedManualRequestPage } from './approve-manual-demand/approved-manual-request/approved-manual-request.page';
import { PenAppManualRequestPage } from './approve-manual-demand/pen-app-manual-request/pen-app-manual-request.page';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      DemandApprovedPageRoutingModule,
      ReactiveFormsModule
    ],
    declarations: [ApproveExternalHiringPage,
      RejectHCDemandPage,
      RejectSBDemandPage,
      PendingHCDemandPage,
      PendingSBDemandPage,
      ApprovedHCDemandPage,
      ApprovedSBDemandPage,
      PenExtDemandsPage,
      ApproveManualDemandPage,
      RejExtDemandsPage,
      AppExtDemandsPage,
      ApprovedManualRequestPage,
      PenAppManualRequestPage,
      PenExtHiringDetailsComponent,
      AppExtHiringDetailsComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],

  })
export class DemandApprovedPageModule {}
