import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForecastDemandSummmaryPage } from './forecast-demand-summmary.page';

describe('ForecastDemandSummmaryPage', () => {
  let component: ForecastDemandSummmaryPage;
  let fixture: ComponentFixture<ForecastDemandSummmaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDemandSummmaryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastDemandSummmaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
