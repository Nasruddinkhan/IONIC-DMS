import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApproveExternalHiringPage } from './approve-external-hiring.page';

const routes: Routes = [
  {
    path: '',
    component: ApproveExternalHiringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApproveExternalHiringPageRoutingModule {}
