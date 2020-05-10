import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenewalstaffingSyncPage } from './renewalstaffing-sync.page';

const routes: Routes = [
  {
    path: '',
    component: RenewalstaffingSyncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenewalstaffingSyncPageRoutingModule {}
