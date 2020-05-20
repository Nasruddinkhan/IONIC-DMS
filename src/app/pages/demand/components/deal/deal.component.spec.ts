import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealComponent } from './deal.component';

describe('DealComponent', () => {
  let component: DealComponent;
  let fixture: ComponentFixture<DealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
