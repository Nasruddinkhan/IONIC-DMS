import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateManualDemandPage } from './create-manual-demand.page';

describe('CreateManualDemandPage', () => {
  let component: CreateManualDemandPage;
  let fixture: ComponentFixture<CreateManualDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManualDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateManualDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
