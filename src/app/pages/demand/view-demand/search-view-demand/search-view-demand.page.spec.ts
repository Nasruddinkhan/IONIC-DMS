import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchViewDemandPage } from './search-view-demand.page';

describe('SearchViewDemandPage', () => {
  let component: SearchViewDemandPage;
  let fixture: ComponentFixture<SearchViewDemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchViewDemandPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchViewDemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
