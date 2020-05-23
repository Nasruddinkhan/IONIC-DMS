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
         NewstaffingSyncPage, ForecastDetailsPage, RenewalstaffingSyncPage, DealComponent, ManualRequestPage,
         AddButtonComponent, ViewDemandPage],
         schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
  })
export class DemandPageModule {}
