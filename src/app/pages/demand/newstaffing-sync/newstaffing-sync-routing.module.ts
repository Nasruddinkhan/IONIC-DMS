import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewstaffingSyncPage } from './newstaffing-sync.page';

const routes: Routes = [
  {
    path: '',
    component: NewstaffingSyncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewstaffingSyncPageRoutingModule {}
