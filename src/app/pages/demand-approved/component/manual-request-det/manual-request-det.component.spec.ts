import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualRequestDetComponent } from './manual-request-det.component';

describe('ManualRequestDetComponent', () => {
  let component: ManualRequestDetComponent;
  let fixture: ComponentFixture<ManualRequestDetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualRequestDetComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManualRequestDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
