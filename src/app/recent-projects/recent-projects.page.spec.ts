import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecentProjectsPage } from './recent-projects.page';

describe('RecentProjectsPage', () => {
  let component: RecentProjectsPage;
  let fixture: ComponentFixture<RecentProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecentProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
