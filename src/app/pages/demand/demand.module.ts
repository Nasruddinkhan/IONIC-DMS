import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ForecastDemandPage } from './forecast-demand/forecast-demand.page';
import { ManualDemandPage } from './manual-demand/manual-demand.page';
import { NewstaffingSyncPage } from './newstaffing-sync/newstaffing-sync.page';
import { RenewalstaffingSyncPage } from './renewalstaffing-sync/renewalstaffing-sync.page';
import { ViewDemandPage } from './view-demand/view-demand.page';
import { DemandPageRoutingModule } from './demand-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      DemandPageRoutingModule
    ],
    declarations: [ForecastDemandPage, ManualDemandPage, NewstaffingSyncPage, RenewalstaffingSyncPage, ViewDemandPage]
  })
export class DemandPageModule {}
