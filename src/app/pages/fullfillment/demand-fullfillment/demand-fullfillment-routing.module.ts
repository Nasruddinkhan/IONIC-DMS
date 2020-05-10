import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandFullfillmentPage } from './demand-fullfillment.page';

const routes: Routes = [
  {
    path: '',
    component: DemandFullfillmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandFullfillmentPageRoutingModule {}
