import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
      url: '/dashboard',
      icon: 'home-outline'
    },
    {
      title: 'Update Demand',
      icon: 'walk',
      children: [
        {
          title: 'Forecast Demand',
          url: '/demand/forecast-demand',
          icon: 'analytics-outline',
        },
        {
          title: 'Manual Demand',
          url: '/demand/manual-demand',
          icon: 'pulse-outline'
        },
        {
          title: 'Newstaffing Sync',
          url: '/demand/newstaffing-sync',
          icon: 'radio-button-on-outline'
        },
        {
          title: 'Renewalstaffing Sync',
          url: '/demand/renewalstaffing-sync',
          icon: 'refresh-circle-outline'
        },
        {
          title: 'View Demand',
          url: '/demand/view-demand',
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
          url: '/fullfillment/demand-fullfillment',
          icon: 'logo-foursquare',
        },
        {
          title: 'Search Employee',
          url: '/fullfillment/search-employee',
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
          url: '/demandapproval/approve-manual-demand',
          icon: 'bandage-outline',
        },
        {
          title: 'Approve External hiring',
          url: '/demandapproval/approve-external-hiring',
          icon: 'ellipsis-horizontal-circle-outline'
        }
      ]
    }
  ];

  constructor(
    private  router: Router,
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

  ngOnInit() {  }
  isAuthenticated() {
    return this.auth.getAuthenticated();
  }
  logout() {
    //this.router.navigate(['logout']);
    window.location.href = `logout`;
  }
}
