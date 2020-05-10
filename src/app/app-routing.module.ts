import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forecast-demand',
    loadChildren: () => import('./pages/demand/forecast-demand/forecast-demand.module').then( m => m.ForecastDemandPageModule)
  },
  {
    path: 'manual-demand',
    loadChildren: () => import('./pages/demand/manual-demand/manual-demand.module').then( m => m.ManualDemandPageModule)
  },
  {
    path: 'newstaffing-sync',
    loadChildren: () => import('./pages/demand/newstaffing-sync/newstaffing-sync.module').then( m => m.NewstaffingSyncPageModule)
  },
  {
    path: 'renewalstaffing-sync',
    loadChildren: () => import('./pages/demand/renewalstaffing-sync/renewalstaffing-sync.module')
    .then( m => m.RenewalstaffingSyncPageModule)
  },
  {
    path: 'view-demand',
    loadChildren: () => import('./pages/demand/view-demand/view-demand.module').then( m => m.ViewDemandPageModule)
  },
  {
    path: 'demand-fullfillment',
    loadChildren: () => import('./pages/fullfillment/demand-fullfillment/demand-fullfillment.module')
    .then( m => m.DemandFullfillmentPageModule)
  },
  {
    path: 'search-employee',
    loadChildren: () => import('./pages/fullfillment/search-employee/search-employee.module')
    .then( m => m.SearchEmployeePageModule)
  },
  {
    path: 'approve-manual-demand',
    loadChildren: () => import('./pages/demand-approved/approve-manual-demand/approve-manual-demand.module')
    .then( m => m.ApproveManualDemandPageModule)
  },
  {
    path: 'approve-external-hiring',
    loadChildren: () => import('./pages/demand-approved/approve-external-hiring/approve-external-hiring.module')
    .then( m => m.ApproveExternalHiringPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
