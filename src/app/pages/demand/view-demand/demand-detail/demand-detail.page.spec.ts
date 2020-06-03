import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandDetailPage } from './demand-detail.page';

describe('DemandDetailPage', () => {
  let component: DemandDetailPage;
  let fixture: ComponentFixture<DemandDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
