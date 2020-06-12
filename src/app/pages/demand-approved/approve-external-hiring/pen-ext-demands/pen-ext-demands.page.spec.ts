import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenExtDemandsPage } from './pen-ext-demands.page';

describe('PenExtDemandsPage', () => {
  let component: PenExtDemandsPage;
  let fixture: ComponentFixture<PenExtDemandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenExtDemandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenExtDemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
