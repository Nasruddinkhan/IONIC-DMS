import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-demand-summmary',
  templateUrl: './forecast-demand-summmary.page.html',
  styleUrls: ['./forecast-demand-summmary.page.scss'],
})
export class ForecastDemandSummmaryPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(`ForecastDemandSummmaryPage`);
  }

}
