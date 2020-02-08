import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProjectCreatePage } from './project-create.page';

describe('ProjectCreatePage', () => {
  let component: ProjectCreatePage;
  let fixture: ComponentFixture<ProjectCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
