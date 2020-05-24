import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RightpriceStaffingSyncPage } from './rightprice-staffing-sync.page';

describe('RightpriceStaffingSyncPage', () => {
  let component: RightpriceStaffingSyncPage;
  let fixture: ComponentFixture<RightpriceStaffingSyncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightpriceStaffingSyncPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RightpriceStaffingSyncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
