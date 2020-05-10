import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './service/security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'DashBoard',
      url: '/folder',
      icon: 'home-outline'
    },
    {
      title: 'Update Demand',
      icon: 'walk',
      children: [
        {
          title: 'Forecast Demand',
          url: '/forecast-demand',
          icon: 'analytics-outline',
        },
        {
          title: 'Manual Demand',
          url: '/manual-demand',
          icon: 'pulse-outline'
        },
        {
          title: 'Newstaffing Sync',
          url: '/newstaffing-sync',
          icon: 'radio-button-on-outline'
        },
        {
          title: 'Renewalstaffing Sync',
          url: '/renewalstaffing-sync',
          icon: 'refresh-circle-outline'
        },
        {
          title: 'View Demand',
          url: '/view-demand',
          icon: 'aperture-outline'
        }
      ]
    },
    {
      title: 'Fullfillment',
      icon: 'business-outline',
      children: [
        {
          title: 'Demand Fullfillment',
          url: '/demand-fullfillment',
          icon: 'logo-foursquare',
        },
        {
          title: 'Search Employee',
          url: '/search-employee',
          icon: 'search-outline'
        }
      ]
    }
    ,
    {
      title: 'Request Demand',
      icon: 'apps-outline',
      children: [
        {
          title: 'Approve Manual Demand',
          url: '/approve-manual-demand',
          icon: 'bandage-outline',
        },
        {
          title: 'Approve External hiring',
          url: '/approve-external-hiring',
          icon: 'ellipsis-horizontal-circle-outline'
        }
      ]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  isAuthenticated() {
    return this.auth.getAuthenticated();
  }
}
