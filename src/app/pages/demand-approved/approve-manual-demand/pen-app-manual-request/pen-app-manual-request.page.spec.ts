import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenAppManualRequestPage } from './pen-app-manual-request.page';

describe('PenAppManualRequestPage', () => {
  let component: PenAppManualRequestPage;
  let fixture: ComponentFixture<PenAppManualRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenAppManualRequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenAppManualRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
