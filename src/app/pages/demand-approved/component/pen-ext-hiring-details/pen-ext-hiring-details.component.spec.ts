import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PenExtHiringDetailsComponent } from './pen-ext-hiring-details.component';

describe('PenExtHiringDetailsComponent', () => {
  let component: PenExtHiringDetailsComponent;
  let fixture: ComponentFixture<PenExtHiringDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenExtHiringDetailsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PenExtHiringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
