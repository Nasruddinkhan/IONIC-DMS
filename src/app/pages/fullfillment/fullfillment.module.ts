import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchEmployeePage } from './search-employee/search-employee.page';
import { DemandFullfillmentPage } from './demand-fullfillment/demand-fullfillment.page';
import { NgModule } from '@angular/core';
import { FullfillmentPageRoutingModule } from './fullfillment-routing.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      FullfillmentPageRoutingModule
    ],
    declarations: [SearchEmployeePage, DemandFullfillmentPage]
  })
export class FullfillmentPageModule {}
