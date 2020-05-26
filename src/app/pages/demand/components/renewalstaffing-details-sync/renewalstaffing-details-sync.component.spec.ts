import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenewalstaffingDetailsSyncComponent } from './renewalstaffing-details-sync.component';

describe('RenewalstaffingDetailsSyncComponent', () => {
  let component: RenewalstaffingDetailsSyncComponent;
  let fixture: ComponentFixture<RenewalstaffingDetailsSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalstaffingDetailsSyncComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenewalstaffingDetailsSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
