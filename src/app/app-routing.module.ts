import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    children: [
      {
        path: 'fullfillment',
        loadChildren: () => import('./pages/fullfillment/fullfillment.module')
       .then( m => m.FullfillmentPageModule)
     },
     {
      path: 'demandapproval',
      loadChildren: () => import('./pages/demand-approved/demand-approved.module')
     .then( m => m.DemandApprovedPageModule)
     },
     {
      path: 'demand',
      loadChildren: () => import('./pages/demand/demand.module')
     .then( m => m.DemandPageModule)
     }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
