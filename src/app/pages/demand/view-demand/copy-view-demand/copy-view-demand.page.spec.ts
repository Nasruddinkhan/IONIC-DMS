import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CopyViewDemandPage } from './copy-view-demand.page';

describe('CopyViewDemandPage', () => {
  let component: CopyViewDemandPage;
  let fixture: ComponentFixture<CopyViewDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyViewDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CopyViewDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
