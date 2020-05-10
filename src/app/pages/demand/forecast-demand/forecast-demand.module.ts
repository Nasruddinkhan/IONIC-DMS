import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForecastDemandPageRoutingModule } from './forecast-demand-routing.module';

import { ForecastDemandPage } from './forecast-demand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForecastDemandPageRoutingModule
  ],
  declarations: [ForecastDemandPage]
})
export class ForecastDemandPageModule {}
