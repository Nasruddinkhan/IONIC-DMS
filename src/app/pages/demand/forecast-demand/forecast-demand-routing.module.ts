import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForecastDemandPage } from './forecast-demand.page';

const routes: Routes = [
  {
    path: '',
    component: ForecastDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForecastDemandPageRoutingModule {}
