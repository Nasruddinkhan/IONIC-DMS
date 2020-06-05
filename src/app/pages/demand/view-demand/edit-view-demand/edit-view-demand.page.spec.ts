import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditViewDemandPage } from './edit-view-demand.page';

describe('EditViewDemandPage', () => {
  let component: EditViewDemandPage;
  let fixture: ComponentFixture<EditViewDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditViewDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditViewDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
