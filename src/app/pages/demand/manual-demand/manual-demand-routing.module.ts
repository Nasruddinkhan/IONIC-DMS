import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualDemandPage } from './manual-demand.page';

const routes: Routes = [
  {
    path: '',
    component: ManualDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualDemandPageRoutingModule {}
