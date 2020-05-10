import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenewalstaffingSyncPageRoutingModule } from './renewalstaffing-sync-routing.module';

import { RenewalstaffingSyncPage } from './renewalstaffing-sync.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenewalstaffingSyncPageRoutingModule
  ],
  declarations: [RenewalstaffingSyncPage]
})
export class RenewalstaffingSyncPageModule {}
