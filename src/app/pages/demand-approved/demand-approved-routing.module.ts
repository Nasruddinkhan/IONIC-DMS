import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveManualDemandPage } from './approve-manual-demand/approve-manual-demand.page';
import { ApproveExternalHiringPage } from './approve-external-hiring/approve-external-hiring.page';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'approve-manual-demand'
  },
  {
    path: 'approve-external-hiring',
    component: ApproveExternalHiringPage
  },
  {
    path: 'approve-manual-demand',
    component: ApproveManualDemandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandApprovedPageRoutingModule {}
