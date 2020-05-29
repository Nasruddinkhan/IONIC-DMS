import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { ResourceforcastingService } from 'src/app/service/forecasting/resourceforcasting.service';


@Component({
  selector: 'app-demands',
  templateUrl: './demands.component.html',
  styleUrls: ['./demands.component.scss'],
})
export class DemandsComponent implements OnInit {
  offset = 0;  pokemon = []; deels10Page = 1; crmID: string;
  @Input() isMulticheck: boolean;

  @Output()
  enableDemandButton: EventEmitter<boolean> = new EventEmitter();



  constructor(private forecastService: ResourceforcastingService) { }

  ngOnInit() {}
  loadDemands(event: {component: IonicSelectableComponent, text: string}) {

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
  onDemandSearch(event: {
    component: IonicSelectableComponent,
    text: string
  }) {
    console.log(event.text);
    if ( event.text === '') {
      this.pokemon = [];
      this.deels10Page = 0;
      this.offset = 0;
      event.component.enableInfiniteScroll();
      this.loadDemands(event);
      return;
    }
    this.forecastService.findPokemon(event.text).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });
  }
  onDemandChange(e) {
    this.enableDemandButton.emit(e);
  }
}
