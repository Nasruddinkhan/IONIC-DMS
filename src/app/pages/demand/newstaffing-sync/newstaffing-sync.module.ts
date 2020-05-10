import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewstaffingSyncPageRoutingModule } from './newstaffing-sync-routing.module';

import { NewstaffingSyncPage } from './newstaffing-sync.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewstaffingSyncPageRoutingModule
  ],
  declarations: [NewstaffingSyncPage]
})
export class NewstaffingSyncPageModule {}
