import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualRequestPage } from './manual-request.page';

describe('ManualRequestPage', () => {
  let component: ManualRequestPage;
  let fixture: ComponentFixture<ManualRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
