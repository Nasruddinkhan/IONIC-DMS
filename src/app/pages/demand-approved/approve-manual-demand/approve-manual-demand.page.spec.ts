import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveManualDemandPage } from './approve-manual-demand.page';

describe('ApproveManualDemandPage', () => {
  let component: ApproveManualDemandPage;
  let fixture: ComponentFixture<ApproveManualDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveManualDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveManualDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
