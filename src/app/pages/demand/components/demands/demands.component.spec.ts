import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandsComponent } from './demands.component';

describe('DemandsComponent', () => {
  let component: DemandsComponent;
  let fixture: ComponentFixture<DemandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
