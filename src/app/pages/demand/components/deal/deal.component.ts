import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ResourceforcastingService } from 'src/app/service/forecasting/resourceforcasting.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {
  offset = 0;  pokemon = []; deels10Page = 1; crmID: string;
  @Input() isMulticheck: boolean;

  @Output()
  enableButton: EventEmitter<boolean> = new EventEmitter();



  constructor(private forecastService: ResourceforcastingService) { }

  ngOnInit() {}
  loadDeals(event: {component: IonicSelectableComponent, text: string}) {

    if (this.deels10Page > 80) {
      this.offset = 0;
      event.component.disableInfiniteScroll();
      return;
    }
    this.offset = this.deels10Page !== 0 ? this.offset += 10 : 0;
    console.log(this.deels10Page);
    console.log(this.offset);
    this.forecastService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = [...this.pokemon, ...res];
      console.log(event);
      event.component.endInfiniteScroll();
      this.deels10Page++;
    });
  }
  onDealSearch(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    console.log(event.text);
    if ( event.text === '') {
      this.pokemon = [];
      this.deels10Page = 0;
      this.offset = 0;
      event.component.enableInfiniteScroll();
      this.loadDeals(event);
      return;
    }
    this.forecastService.findPokemon(event.text).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }
  onDealChange(e) {
    this.enableButton.emit(e);
  }
}
