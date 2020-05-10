import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApproveExternalHiringPage } from './approve-external-hiring.page';

describe('ApproveExternalHiringPage', () => {
  let component: ApproveExternalHiringPage;
  let fixture: ComponentFixture<ApproveExternalHiringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveExternalHiringPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApproveExternalHiringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
