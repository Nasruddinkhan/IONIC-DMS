import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualDemandPage } from './manual-demand.page';

describe('ManualDemandPage', () => {
  let component: ManualDemandPage;
  let fixture: ComponentFixture<ManualDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
