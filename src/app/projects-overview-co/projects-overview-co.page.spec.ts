import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectsOverviewCoPage } from './projects-overview-co.page';

describe('ProjectsOverviewCoPage', () => {
  let component: ProjectsOverviewCoPage;
  let fixture: ComponentFixture<ProjectsOverviewCoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsOverviewCoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsOverviewCoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
