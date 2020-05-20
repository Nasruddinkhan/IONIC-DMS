import { Component, OnInit, ViewChild } from '@angular/core';
import { ResourceforcastingService } from 'src/app/service/forecasting/resourceforcasting.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';

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
  crmID: string;
  deals = [];
  deels10Page = 1;
  ngOnInit() {
    this.loadPokemon();
  //  this.loadDeals();
  }

  loadPokemon(loadMore = false, event?) {
    console.log(loadMore);
    console.log( this.offset );
    if (loadMore) {
      this.offset += 10;
    }
    this.forecastService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = [...this.pokemon, ...res];
      console.log(event);
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
