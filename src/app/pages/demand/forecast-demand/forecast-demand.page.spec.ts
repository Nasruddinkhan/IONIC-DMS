import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForecastDemandPage } from './forecast-demand.page';

describe('ForecastDemandPage', () => {
  let component: ForecastDemandPage;
  let fixture: ComponentFixture<ForecastDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForecastDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
