import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDemandPage } from './forecast-demand/forecast-demand.page';
import { ManualDemandPage } from './manual-demand/manual-demand.page';
import { NewstaffingSyncPage } from './newstaffing-sync/newstaffing-sync.page';
import { RenewalstaffingSyncPage } from './renewalstaffing-sync/renewalstaffing-sync.page';
import { ViewDemandPage } from './view-demand/view-demand.page';
import { ForecastDetailsPage } from './forecast-demand/forecast-details/forecast-details.page';
import { CreateForecastDemandPage } from './forecast-demand/create-forecast-demand/create-forecast-demand.page';
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
    path: 'newstaffing-sync',
    component: NewstaffingSyncPage
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
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandPageRoutingModule {}
