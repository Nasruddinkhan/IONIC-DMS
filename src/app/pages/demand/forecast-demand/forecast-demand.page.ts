import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceforcastingService } from 'src/app/service/forecasting/resourceforcasting.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-forecast-demand',
  templateUrl: './forecast-demand.page.html',
  styleUrls: ['./forecast-demand.page.scss'],
})
export class ForecastDemandPage implements OnInit {
  offset = 0;
  @ViewChild(IonInfiniteScroll,  {static: false}) infinite: IonInfiniteScroll;
  constructor(private forecastService: ResourceforcastingService) { }
  pokemon = [];
  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.forecastService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = [...this.pokemon, ...res];
      if (event) {
        event.target.complete();
      }
      if (this.offset === 852) {
        this.infinite.disabled = true;
      }
    });
  }
  onSearchChange(e) {
    if ( e.detail.value === '') {
      this.offset = 0;
      this.loadPokemon();
      return;
    }
    this.forecastService.findPokemon(e.detail.value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }
}
