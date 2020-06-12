import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RejExtDemandsPage } from './rej-ext-demands.page';

describe('RejExtDemandsPage', () => {
  let component: RejExtDemandsPage;
  let fixture: ComponentFixture<RejExtDemandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejExtDemandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RejExtDemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
