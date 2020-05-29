import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelViewDemandPage } from './cancel-view-demand.page';

describe('CancelViewDemandPage', () => {
  let component: CancelViewDemandPage;
  let fixture: ComponentFixture<CancelViewDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelViewDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CancelViewDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
