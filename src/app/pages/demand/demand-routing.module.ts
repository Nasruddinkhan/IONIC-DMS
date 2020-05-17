import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastDemandPage } from './forecast-demand/forecast-demand.page';
import { ManualDemandPage } from './manual-demand/manual-demand.page';
import { NewstaffingSyncPage } from './newstaffing-sync/newstaffing-sync.page';
import { RenewalstaffingSyncPage } from './renewalstaffing-sync/renewalstaffing-sync.page';
import { ViewDemandPage } from './view-demand/view-demand.page';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'forecast-demand'
  },
  {
    path: 'forecast-demand',
    component: ForecastDemandPage
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandPageRoutingModule {}
