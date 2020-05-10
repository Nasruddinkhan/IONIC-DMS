import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RenewalstaffingSyncPage } from './renewalstaffing-sync.page';

describe('RenewalstaffingSyncPage', () => {
  let component: RenewalstaffingSyncPage;
  let fixture: ComponentFixture<RenewalstaffingSyncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewalstaffingSyncPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RenewalstaffingSyncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
