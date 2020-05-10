import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewstaffingSyncPage } from './newstaffing-sync.page';

describe('NewstaffingSyncPage', () => {
  let component: NewstaffingSyncPage;
  let fixture: ComponentFixture<NewstaffingSyncPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewstaffingSyncPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewstaffingSyncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
