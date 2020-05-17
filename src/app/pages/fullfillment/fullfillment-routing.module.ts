import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchEmployeePage } from './search-employee/search-employee.page';
import { DemandFullfillmentPage } from './demand-fullfillment/demand-fullfillment.page';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'demand-fullfillment'
  },
  {
    path: 'demand-fullfillment',
    component: DemandFullfillmentPage
  },
  {
    path: 'search-employee',
    component: SearchEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullfillmentPageRoutingModule {}
