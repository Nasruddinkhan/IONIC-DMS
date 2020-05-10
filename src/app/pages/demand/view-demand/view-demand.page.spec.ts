import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDemandPage } from './view-demand.page';

describe('ViewDemandPage', () => {
  let component: ViewDemandPage;
  let fixture: ComponentFixture<ViewDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
