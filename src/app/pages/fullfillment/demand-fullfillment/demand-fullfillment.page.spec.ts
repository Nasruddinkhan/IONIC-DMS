import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandFullfillmentPage } from './demand-fullfillment.page';

describe('DemandFullfillmentPage', () => {
  let component: DemandFullfillmentPage;
  let fixture: ComponentFixture<DemandFullfillmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandFullfillmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandFullfillmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
