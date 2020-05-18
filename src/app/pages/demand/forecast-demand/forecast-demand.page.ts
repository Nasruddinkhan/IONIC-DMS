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
  deels10Page = 2;
  ngOnInit() {
    this.loadPokemon();
    this.getOnDeals();
  }
  getOnDeals() {
    this.deals = this.forecastService.getDeals();
  }
  loadPokemon(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 10;
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

  getDeals(event: { component: IonicSelectableComponent, infiniteScroll: IonInfiniteScroll }) {
    // Trere're no more ports - disable infinite scroll.
    if (this.deels10Page > 10) {
      event.infiniteScroll.disabled  = true;
      return;
    }
    console.log( this.deels10Page);
    this.forecastService.getDealsAsync(this.deels10Page).subscribe(ports => {
      event.component.items = event.component.items.concat(ports);
      this.deels10Page++;
    });
  }
  dealChange(event: { component: IonicSelectableComponent, value: any }) {
    console.log('deal:', event.value);
  }
}
