import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ForecastDemandPage } from './forecast-demand/forecast-demand.page';
import { ManualDemandPage } from './manual-demand/manual-demand.page';
import { NewstaffingSyncPage } from './newstaffing-sync/newstaffing-sync.page';
import { RenewalstaffingSyncPage } from './renewalstaffing-sync/renewalstaffing-sync.page';
import { ViewDemandPage } from './view-demand/view-demand.page';
import { DemandPageRoutingModule } from './demand-routing.module';
import { ForecastDetailsPage } from './forecast-demand/forecast-details/forecast-details.page';
import { ForecastComponent } from './components/forecast/forecast.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { DealComponent } from './components/deal/deal.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CreateForecastDemandPage } from './forecast-demand/create-forecast-demand/create-forecast-demand.page';
import { ManualRequestPage } from './manual-demand/manual-request/manual-request.page';
import { CreateManualDemandPage } from './manual-demand/create-manual-demand/create-manual-demand.page';
import { ManualRequestComponent } from './components/manual-request/manual-request.component';
import { ManualRequestDetailsComponent } from './components/manual-request/manual-request-details.component';
import { RightpriceStaffingSyncPage } from './newstaffing-sync/rightprice-staffing-sync/rightprice-staffing-sync.page';
import { ForecastDemandSummmaryPage } from './newstaffing-sync/forecast-demand-summmary/forecast-demand-summmary.page';
import { StaffingSycComponent } from './components/staffing-syc/staffing-syc.component';
import { StafingSynctDetailsComponent } from './components/staffing-syc/staffing-sysnc-details.component';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      DemandPageRoutingModule,
      IonicSelectableModule,
      ReactiveFormsModule
    ],
    declarations: [ForecastDemandPage, ManualDemandPage, ForecastComponent, CreateForecastDemandPage, CreateManualDemandPage,
         NewstaffingSyncPage, ForecastDetailsPage, RenewalstaffingSyncPage, DealComponent, ManualRequestPage, StaffingSycComponent,
         ManualRequestComponent, ManualRequestDetailsComponent, RightpriceStaffingSyncPage, ForecastDemandSummmaryPage,
         AddButtonComponent, ViewDemandPage, StafingSynctDetailsComponent],
         schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
  })
export class DemandPageModule {}
