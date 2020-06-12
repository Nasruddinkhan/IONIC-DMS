import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppExtDemandsPage } from './app-ext-demands.page';

describe('AppExtDemandsPage', () => {
  let component: AppExtDemandsPage;
  let fixture: ComponentFixture<AppExtDemandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExtDemandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppExtDemandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
