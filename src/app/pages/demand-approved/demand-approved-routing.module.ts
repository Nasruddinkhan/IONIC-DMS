import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveManualDemandPage } from './approve-manual-demand/approve-manual-demand.page';
import { ApproveExternalHiringPage } from './approve-external-hiring/approve-external-hiring.page';
import { PenExtDemandsPage } from './approve-external-hiring/pen-ext-demands/pen-ext-demands.page';
import { AppExtDemandsPage } from './approve-external-hiring/app-ext-demands/app-ext-demands.page';
import { RejExtDemandsPage } from './approve-external-hiring/rej-ext-demands/rej-ext-demands.page';





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
  },
  {
    path: 'pen-ext-demands',
   component:PenExtDemandsPage
  },
  {
    path: 'app-ext-demands',
    component:AppExtDemandsPage
  },
  {
    path: 'rej-ext-demands',
    component:RejExtDemandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandApprovedPageRoutingModule {}
