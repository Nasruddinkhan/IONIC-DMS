import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ForecastDemandPage } from './forecast-demand/forecast-demand.page';
import { ManualDemandPage } from './manual-demand/manual-demand.page';
import { NewstaffingSyncPage } from './newstaffing-sync/newstaffing-sync.page';
import { RenewalstaffingSyncPage } from './renewalstaffing-sync/renewalstaffing-sync.page';
import { ViewDemandPage } from './view-demand/view-demand.page';
import { DemandPageRoutingModule } from './demand-routing.module';
import { ForecastDetailsPage } from './forecast-demand/forecast-details/forecast-details.page';
import { ForecastComponent } from './components/forecast/forecast.component';
import { IonicSelectableModule } from 'ionic-selectable';
import { DealComponent } from './components/deal/deal.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CreateForecastDemandPage } from './forecast-demand/create-forecast-demand/create-forecast-demand.page';
import { ManualRequestPage } from './manual-demand/manual-request/manual-request.page';
import { CreateManualDemandPage } from './manual-demand/create-manual-demand/create-manual-demand.page';
import { ManualRequestComponent } from './components/manual-request/manual-request.component';
import { ManualRequestDetailsComponent } from './components/manual-request/manual-request-details.component';
import { RightpriceStaffingSyncPage } from './newstaffing-sync/rightprice-staffing-sync/rightprice-staffing-sync.page';
import { ForecastDemandSummmaryPage } from './newstaffing-sync/forecast-demand-summmary/forecast-demand-summmary.page';
import { StaffingSycComponent } from './components/staffing-syc/staffing-syc.component';
import { StafingSynctDetailsComponent } from './components/staffing-syc/staffing-sysnc-details.component';
import { RenewalstaffingDetailsSyncComponent } from './components/renewalstaffing-details-sync/renewalstaffing-details-sync.component';
import { RenewalDemandComponent } from './components/renewalstaffing-details-sync/renewal-demand-component';
import { SearchViewDemandPage } from './view-demand/search-view-demand/search-view-demand.page';
import { DemandPopupComponent } from './components/demand-popup/demand-popup.component';
import { DealPopupComponent } from './components/deal-popup/deal-popup.component';
import { ProjectPopupComponent } from './components/project-popup/project-popup.component';
import { ViewDemandListComponent } from './components/view-demand-list/view-demand-list.component';
import { PopupViewMenuListComponent } from './components/view-demand-list/view-popup-menu-list ';
import { CancelViewDemandPage } from './view-demand/cancel-view-demand/cancel-view-demand.page';
import { DemandsComponent } from './components/demands/demands.component';
import { CancelDemandsListPage } from './view-demand/cancel-view-demand/cancel-demands-list.page';
import { CancelDemandsPage } from './view-demand/cancel-view-demand/cancel-demands.page';
import { CancelViewDemandComponent } from './components/view-demand-list/cancel-view-demand-list.component';
import { CopyViewDemandPage } from './view-demand/copy-view-demand/copy-view-demand.page';
import { DemandDetailPage } from './view-demand/demand-detail/demand-detail.page';
import { EditViewDemandPage } from './view-demand/edit-view-demand/edit-view-demand.page';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      DemandPageRoutingModule,
      IonicSelectableModule,
      ReactiveFormsModule
    ],
    declarations: [ForecastDemandPage,
                   ManualDemandPage,
                   ForecastComponent,
                   CreateForecastDemandPage,
                   CreateManualDemandPage,
                   NewstaffingSyncPage,
                   CancelViewDemandPage,
                   CancelDemandsListPage,
                   CancelDemandsPage,
                   CancelViewDemandComponent,
                   DemandDetailPage,
                   EditViewDemandPage,
         ForecastDetailsPage, RenewalstaffingSyncPage, DealComponent, ManualRequestPage, StaffingSycComponent,
         ManualRequestComponent, ManualRequestDetailsComponent, RightpriceStaffingSyncPage, ForecastDemandSummmaryPage,
         AddButtonComponent, ViewDemandPage, StafingSynctDetailsComponent, RenewalDemandComponent, RenewalstaffingDetailsSyncComponent,
         SearchViewDemandPage, DealPopupComponent, DemandPopupComponent,ViewDemandListComponent, CopyViewDemandPage,
         PopupViewMenuListComponent, CancelViewDemandPage, ProjectPopupComponent, DemandsComponent],
         schemas: [
          CUSTOM_ELEMENTS_SCHEMA
      ],
      entryComponents: [

      ]
  })
export class DemandPageModule {}
