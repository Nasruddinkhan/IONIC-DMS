import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveManualDemandPage } from './approve-manual-demand.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveManualDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveManualDemandPageRoutingModule {}
