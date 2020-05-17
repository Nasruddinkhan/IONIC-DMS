import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
