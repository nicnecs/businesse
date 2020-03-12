import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectMenuPage } from './project-menu.page';

describe('ProjectMenuPage', () => {
  let component: ProjectMenuPage;
  let fixture: ComponentFixture<ProjectMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
