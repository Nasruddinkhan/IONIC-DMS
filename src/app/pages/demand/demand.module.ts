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
import { ForecastDetailsPage } from './forecast-demand/forecast-details/forecast-details.page';
import { ForecastComponent } from './components/forecast/forecast.component';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      DemandPageRoutingModule,
      IonicSelectableModule
    ],
    declarations: [ForecastDemandPage, ManualDemandPage, ForecastComponent,
        NewstaffingSyncPage, ForecastDetailsPage, RenewalstaffingSyncPage,
         ViewDemandPage]
  })
export class DemandPageModule {}
