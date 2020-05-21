import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateForecastDemandPage } from './create-forecast-demand.page';

describe('CreateForecastDemandPage', () => {
  let component: CreateForecastDemandPage;
  let fixture: ComponentFixture<CreateForecastDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateForecastDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateForecastDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
