import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourceforcastingService } from 'src/app/service/forecasting/resourceforcasting.service';

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.page.html',
  styleUrls: ['./forecast-details.page.scss'],
})
export class ForecastDetailsPage implements OnInit {
  details: any;

  constructor(private activeRoute: ActivatedRoute,
              private forecastService: ResourceforcastingService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('demandID')) {
        return;
      }
      const demandID = paramMap.get('demandID');
      this.forecastService.getPokeDetails(demandID).subscribe(res => {
        console.log('res', res);
        this.details = res;
      });
     });
  }

}
