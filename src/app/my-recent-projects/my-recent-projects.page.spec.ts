import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyRecentProjectsPage } from './my-recent-projects.page';

describe('MyRecentProjectsPage', () => {
  let component: MyRecentProjectsPage;
  let fixture: ComponentFixture<MyRecentProjectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRecentProjectsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyRecentProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
