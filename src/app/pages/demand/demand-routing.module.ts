import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDemandPage } from './forecast-demand/forecast-demand.page';
import { ManualDemandPage } from './manual-demand/manual-demand.page';
import { NewstaffingSyncPage } from './newstaffing-sync/newstaffing-sync.page';
import { RenewalstaffingSyncPage } from './renewalstaffing-sync/renewalstaffing-sync.page';
import { ViewDemandPage } from './view-demand/view-demand.page';
import { ForecastDetailsPage } from './forecast-demand/forecast-details/forecast-details.page';
import { CreateForecastDemandPage } from './forecast-demand/create-forecast-demand/create-forecast-demand.page';
import { ManualRequestComponent } from './components/manual-request/manual-request.component';
import { StaffingSycComponent } from './components/staffing-syc/staffing-syc.component';
import { RenewalstaffingDetailsSyncComponent } from './components/renewalstaffing-details-sync/renewalstaffing-details-sync.component';
const routes: Routes = [
  {
    path: 'forecast-demand',
    component: ForecastDemandPage
  },
  {
    path: 'forecast-demand/:demandID',
    component: ForecastDetailsPage
  },
  {
    path: 'manual-demand',
    component: ManualDemandPage
  },
  {
    path: 'manual-demand/:requestID',
    component: ManualRequestComponent
  },
  {
    path: 'newstaffing-sync',
    component: NewstaffingSyncPage
  },
  {
    path: 'newstaffing-sync/:demandID',
    component: StaffingSycComponent
  },
  {
    path: 'renewalstaffing-sync',
    component: RenewalstaffingSyncPage
  },
  {
    path: 'view-demand',
    component: ViewDemandPage
  },
  {
    path: 'create-forecast-demand/:dealID',
    component: CreateForecastDemandPage
  },
  {
    path: 'renewalstaffing-sync/:demandID',
    component: RenewalstaffingDetailsSyncComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandPageRoutingModule {}
